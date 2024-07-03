import { NotificationService, Position } from "@progress/kendo-angular-notification";


export class KendoNotification {

    public static readonly time: number = 2500;
    public static readonly duration: number = 300;

    public static showDefault(notificationService: NotificationService, content: string): void {

        notificationService.show({
            content: content,
            hideAfter: this.time,
            position: { horizontal: "right", vertical: "bottom" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "none", icon: false },
        });
    }
    public static showSuccess(notificationService: NotificationService, content: string): void {
        notificationService.show({
            content: content,
            hideAfter: this.time,
            position: { horizontal: "right", vertical: "bottom" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "success", icon: true },
        });
    }
    public static showWarning(notificationService: NotificationService, content: string): void {
        notificationService.show({
            content: content,
            hideAfter: this.time,
            position: { horizontal: "right", vertical: "bottom" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "warning", icon: true },
        });
    }
    public static showInfo(notificationService: NotificationService, content: string): void {
        notificationService.show({
            content: content,
            hideAfter: this.time,
            position: { horizontal: "right", vertical: "bottom" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "info", icon: true },
        });
    }
    public static showError(notificationService: NotificationService, content: string): void {
        notificationService.show({
            content: content,
            hideAfter: this.time,
            position: { horizontal: "right", vertical: "bottom" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "error", icon: true },
        });
    }
    public static showValidate(notificationService: NotificationService, content: string): void {
        notificationService.show({
            content: content,
            hideAfter: this.time,
            position: { horizontal: "center", vertical: "top" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "error", icon: true },
        });
    }
    public static showDownload(notificationService: NotificationService, content: string): void {

        notificationService.show({
            content: content,
            position: { horizontal: "right", vertical: "top" },
            animation: { type: "fade", duration: this.duration },
            type: { style: "info", icon: true },
            closable: true
        });
    }
}