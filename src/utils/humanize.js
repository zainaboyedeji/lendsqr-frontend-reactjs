/**
 * A function that converts a string to a human readable string.
 * It replaces hyphen and underscore with space.
 */
export default function humanize(str) {
    return str.replace(/[-_]/g, ' ')};