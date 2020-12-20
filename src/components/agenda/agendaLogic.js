import { SONG_TYPES } from "../shared/shared-defs"

export const getSongByType = (type, songs) => {
    if(type.includes(SONG_TYPES.SPECIAL)) {
        return getSpecialSongByOrder(type, songs);
    } else {
        return songs.find((song) => {
            return song.type === type
        })
    }
}

export const getSpecialSongByOrder = (type, songs) => {
    return songs.find(special => special.type.includes(SONG_TYPES.SPECIAL) && type.split('-')[1] === special.order)
}

export const getSpeakerByOrder = (type, speakers) => {
    return speakers.find(order => order.order === type)
}

export const getPrayerByType = (type, prayers) => {
    return prayers.find(prayer => prayer.type === type)
}