import { SONG_TYPES } from "../shared/shared-defs"

export const getSongByType = (type, songs) => {
    if(type === SONG_TYPES.SPECIAL) {
        return songs.filter((song) => {
            return song.type === type
        })
    } else {
        return songs.find((song) => {
            return song.type === type
        })
    }
}

export const getSpeakerByOrder = (type, speakers) => {
    return speakers.find(order => order.order === type)
}

export const getPrayerByType = (type, prayers) => {
    return prayers.find(prayer => prayer.type === type)
}