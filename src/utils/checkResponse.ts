export default function checkResponse(boolean: boolean): string {
    const response = boolean === true ? 'Yes' : 'No';
    return response;
}