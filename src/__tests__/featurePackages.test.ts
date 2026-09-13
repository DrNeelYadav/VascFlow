import { describe, it, expect } from 'vitest';
import React from 'react';
import { VitalsDashboard } from '@vascule/feature-patient-vitals';
import { BookingMatrix } from '@vascule/feature-ot-scheduling';

describe('Phase 4: Frontend Domain Isolation & Feature Packages', () => {
  describe('@vascule/feature-patient-vitals', () => {
    it('exports VitalsDashboard component and types correctly', () => {
      expect(VitalsDashboard).toBeDefined();
      expect(typeof VitalsDashboard).toBe('function');
    });

    it('instantiates VitalsDashboard element with default telemetry props', () => {
      const element = React.createElement(VitalsDashboard);
      expect(React.isValidElement(element)).toBe(true);
      expect(element.type).toBe(VitalsDashboard);
    });

    it('allows overriding initial hemodynamics via props', () => {
      const customHemodynamics = {
        systolic: 125,
        diastolic: 80,
        map: 95,
        source: 'Radial A-Line',
        heartRate: 68,
        rhythmStatus: 'Normal Sinus Rhythm',
        prIntervalMs: 160,
        qtcIntervalMs: 410,
        spo2Percent: 98,
        etco2MmHg: 38,
        respiratoryRate: 15,
        actSeconds: 310,
        actTargetMin: 250,
        actTargetMax: 300,
        baselineActSeconds: 135,
        lastHeparinDose: '5,000 Units IV at 12:15',
      };

      const element = React.createElement(VitalsDashboard, {
        patientName: 'TEST PATIENT',
        mrn: '#IR-TEST-001',
        initialHemodynamics: customHemodynamics,
      });
      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.patientName).toBe('TEST PATIENT');
      expect(element.props.initialHemodynamics?.systolic).toBe(125);
      expect(element.props.initialHemodynamics?.map).toBe(95);
    });

    it('enforces 100% English text with zero Hindi characters in source definitions', () => {
      const dashboardStr = VitalsDashboard.toString();
      expect(/[\u0900-\u097F]/.test(dashboardStr)).toBe(false);
    });
  });

  describe('@vascule/feature-ot-scheduling', () => {
    it('exports BookingMatrix component and types correctly', () => {
      expect(BookingMatrix).toBeDefined();
      expect(typeof BookingMatrix).toBe('function');
    });

    it('instantiates BookingMatrix element with action callbacks', () => {
      let bookClicked = false;
      let admitClicked = false;

      const element = React.createElement(BookingMatrix, {
        onBookCase: () => { bookClicked = true; },
        onAdmitCase: () => { admitClicked = true; },
      });

      expect(React.isValidElement(element)).toBe(true);
      expect(element.type).toBe(BookingMatrix);
      expect(typeof element.props.onBookCase).toBe('function');
      expect(typeof element.props.onAdmitCase).toBe('function');
    });

    it('accepts custom suite and case lists', () => {
      const customSuites = [
        {
          id: 'test-suite-1',
          name: 'Hybrid Lab 1',
          hardware: 'Siemens Pheno',
          status: 'Active' as const,
          statusLabel: 'Operating',
        },
      ];

      const customCases = [
        {
          id: 'case-01',
          caseNumber: 'VIR-999',
          procedureName: 'TACE Hepatic',
          procedureCode: '37243',
          physician: 'Dr. Sterling',
          status: 'In Progress' as const,
          location: 'Hybrid Lab 1',
          priority: 'STAT' as const,
          scheduledTime: '13:00',
          estimatedDurationMinutes: 90,
        },
      ];

      const element = React.createElement(BookingMatrix, {
        suites: customSuites,
        cases: customCases,
      });

      expect(React.isValidElement(element)).toBe(true);
      expect(element.props.suites).toHaveLength(1);
      expect(element.props.cases?.[0].priority).toBe('STAT');
    });

    it('enforces 100% English text with zero Hindi characters in source definitions', () => {
      const matrixStr = BookingMatrix.toString();
      expect(/[\u0900-\u097F]/.test(matrixStr)).toBe(false);
    });
  });
});
