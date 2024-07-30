const resonpses = {
    success: (data, message) => {
        return {
            status: 'success',
            data,
            message
        }
    },
    error: (data, message) => {
        return {
            status: 'error',
            data,
            message
        }
    }
}