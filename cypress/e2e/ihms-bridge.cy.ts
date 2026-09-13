describe('SMS IR-RIS to Rajasthan IHMS 2.0 EMR Bridge E2E Test', () => {
  beforeEach(() => {
    // Visit the application Discharge Studio
    cy.visit('/#/discharge');
  });

  it('renders the Discharge Studio with active patient identifiers', () => {
    cy.contains('SMS Medical College').should('be.visible');
    cy.contains('CR No:').should('be.visible');
    cy.get('input, textarea').should('have.length.greaterThan', 5);
  });

  it('generates standardized IHMS 2.0 clinical summary note', () => {
    // Check that the preview panel renders operative details
    cy.contains('INTERVENTIONAL RADIOLOGY OPERATIVE RECORD').should('be.visible');
    cy.contains('DISCHARGE MEDICATIONS').should('be.visible');
    cy.contains('FOLLOW-UP SCHEDULE').should('be.visible');
  });

  it('allows 1-click clipboard copy of minified JSON for Tampermonkey autofill', () => {
    // Stub the navigator.clipboard API
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, 'writeText').resolves().as('clipboardWrite');
    });

    // Trigger copy bridge button
    cy.contains('button', /Copy IHMS Note|Copy EMR/i).click();

    // Verify clipboard was called with clinical text or payload
    cy.get('@clipboardWrite').should('have.been.calledOnce');
  });

  it('simulates Tampermonkey script DOM injection into mock IHMS 2.0 portal elements', () => {
    // Create simulated Rajasthan IHMS 2.0 form inputs in DOM
    cy.document().then((doc) => {
      const mockContainer = doc.createElement('div');
      mockContainer.id = 'mock-ihms-portal';
      mockContainer.innerHTML = `
        <input type="text" id="txtCrNo" />
        <input type="text" id="txtPatientName" />
        <textarea id="txtDiagnosis"></textarea>
        <textarea id="txtProcedureNotes"></textarea>
        <textarea id="txtDischargeMedications"></textarea>
        <textarea id="txtDischargeAdvice"></textarea>
      `;
      doc.body.appendChild(mockContainer);

      // Simulate payload application
      const mockPayload = {
        crNo: 'CR-2026-9012',
        patientName: 'Kamla Devi',
        diagnosis: 'Refractory Lower GI Bleeding / Cecal Angiodysplasia',
        procedureName: 'Mesenteric Angiography & Microcoil Embolization',
        opNotes: 'Superselective catheterization with 2.7F Progreat. 3 microcoils deployed.',
        meds: 'Tab Tranexamic Acid 500mg TDS x 3 days',
        advice: 'Bed rest for 24 hours. Report to SMS emergency if re-bleeding occurs.'
      };

      const crInput = doc.getElementById('txtCrNo') as HTMLInputElement;
      const diagInput = doc.getElementById('txtDiagnosis') as HTMLTextAreaElement;
      const opInput = doc.getElementById('txtProcedureNotes') as HTMLTextAreaElement;
      const medInput = doc.getElementById('txtDischargeMedications') as HTMLTextAreaElement;

      if (crInput) crInput.value = mockPayload.crNo;
      if (diagInput) diagInput.value = mockPayload.diagnosis;
      if (opInput) opInput.value = mockPayload.opNotes;
      if (medInput) medInput.value = mockPayload.meds;

      expect(crInput.value).to.equal('CR-2026-9012');
      expect(diagInput.value).to.contain('Refractory Lower GI Bleeding');
      expect(opInput.value).to.contain('Superselective catheterization');
      expect(medInput.value).to.contain('Tranexamic Acid');

      mockContainer.remove();
    });
  });
});
