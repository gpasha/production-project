import { Profile, ProfileErrors } from '../../types/profile'

export const validateProfileData = (data?: Profile): ProfileErrors[] => {
    if (!data) {
        return [ProfileErrors.NO_DATA]
    }

    const {
        first,
        lastname,
        age,
        country
    } = data

    const errors: ProfileErrors[] = []

    if (!first || !lastname) {
        errors.push(ProfileErrors.INCORRECT_USERDATA)
    }

    if (!age && !Number.isInteger(age)) {
        errors.push(ProfileErrors.INCORRECT_AGE)
    }

    if (!country) {
        errors.push(ProfileErrors.INCORRECT_COUNTRY)
    }

    return errors
}
