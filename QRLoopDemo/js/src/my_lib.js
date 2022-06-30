import { dataToFrames } from 'qrloop';

export function getFrames(data, dataSize, loops) {
    return dataToFrames(data, dataSize, loops);
}