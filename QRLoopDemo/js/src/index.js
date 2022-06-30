import {
    getFrames,
    parseFrames,
    isComplete,
    getFrameData,
    getProgress
} from './my_lib';

export function GetFrames(data, dataSize = 120, loops = 1) {
    return getFrames(data, dataSize, loops);
}

export function ParseFrames(s, chunk) {
    return parseFrames(s, chunk);
}

export function IsComplete(s) {
    return isComplete(s);
}

export function GetFrameData(s) {
    return getFrameData(s);
}

export function GetProgress(s) {
    return getProgress(s);
}