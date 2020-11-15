import { ANNOUNCEMENT_TYPES } from "../shared/shared-defs";

export const getAnnouncementsByType = (type, announcements) => {
    return announcements.filter(announcement => announcement.type === type)
}

export const getAnnouncementTypeMappings = () => {
    const mapping = {};
    mapping[ANNOUNCEMENT_TYPES.GENERAL] = 'General';
    mapping[ANNOUNCEMENT_TYPES.YMYW] = 'Young Men/Young Women';
    mapping[ANNOUNCEMENT_TYPES.PRIMARY] = 'Primary';
    mapping[ANNOUNCEMENT_TYPES.ELDERS] = 'Elders';
    mapping[ANNOUNCEMENT_TYPES.RS] = 'Relief Society';
    mapping[ANNOUNCEMENT_TYPES.MISSIONARIES] = 'Missionaries';
    return mapping;
}
