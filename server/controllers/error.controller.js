function handleError(req, res) {
    alert(res);
}

function getErrorMessage(errorMessage) {
    console.log(errorMessage);
}

export default {
    handleError: handleError,
    getErrorMessage: getErrorMessage
};