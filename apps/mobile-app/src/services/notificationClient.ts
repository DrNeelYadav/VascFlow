/**
 * Client-side integration with services/notification-service (:8084).
 */

export interface MobileNotificationPayload {
  tenantId: string;
  eventType: "STAT_CASE_BOOKED" | "CI_AKI_WARNING" | "CRITICAL_CONTRAST_REACTION" | "SCHEDULE_CHANGE";
  title: string;
  body: string;
  priority: "HIGH" | "CRITICAL" | "NORMAL";
  patientId?: string;
  suiteName?: string;
  deepLink?: string;
}

export class MobileNotificationClient {
  private apiBase: string;
  private tenantId: string;

  constructor(apiBase = "/api/proxy/notifications", tenantId = "tenant_sms_jaipur") {
    this.apiBase = apiBase;
    this.tenantId = tenantId;
  }

  /**
   * Registers the mobile device push token with the backend notification service.
   */
  public async registerDeviceToken(
    deviceToken: string,
    platform: "ios" | "android",
    clinicianId: string,
    roleTier = "Resident"
  ): Promise<boolean> {
    try {
      const res = await fetch(`${this.apiBase}/api/v1/notifications/register-device`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Tenant-ID": this.tenantId,
        },
        body: JSON.stringify({
          deviceToken,
          platform,
          clinicianId,
          tenantId: this.tenantId,
          roleTier,
        }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  /**
   * Dispatches an emergency broadcast for an urgent clinical case.
   */
  public async dispatchClinicalAlert(payload: MobileNotificationPayload): Promise<{
    success: boolean;
    messageId?: string;
  }> {
    try {
      const res = await fetch(`${this.apiBase}/api/v1/notifications/broadcast`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Tenant-ID": payload.tenantId || this.tenantId,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        return { success: false };
      }

      const data = await res.json();
      return { success: true, messageId: data.messageId };
    } catch {
      return { success: false };
    }
  }
}

export const mobileNotificationClient = new MobileNotificationClient();
