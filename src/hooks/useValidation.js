import { useCallback, useState } from "react"


export const useValidation = initialValue => {
    [isValid, setIsValid] = useState(initialValue)

    const remoteSetIsValid = useCallback((valid = false) => setIsValid(valid), [])

    return [ { isValid, remoteSetIsValid }, () => setIsValid(false) ]
}