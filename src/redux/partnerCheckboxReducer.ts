import { createSlice } from '@reduxjs/toolkit'

type CountryCheckboxType = {
    checkboxEwl: string
    checkboxPersonalService: string
    checkboxFastService: string
    checkboxBisar: string
    checkboxGremmy: string
    checkboxOtto: string
}

const initialState: CountryCheckboxType = {
    checkboxEwl: '',
    checkboxPersonalService: '',
    checkboxFastService: '',
    checkboxBisar: '',
    checkboxGremmy: '',
    checkboxOtto: '',
}

export const partnerCheckboxReducer = createSlice({
    name: 'partnerCheckbox',
    initialState,
    reducers: {
        ewlChecked: (state, action) => ({
            ...state,
            checkboxEwl: action.payload,
        }),
        personalServiceChecked: (state, action) => ({
            ...state,
            checkboxPersonalService: action.payload,
        }),
        fastServiceChecked: (state, action) => ({
            ...state,
            checkboxFastService: action.payload,
        }),
        bisarChecked: (state, action) => ({
            ...state,
            checkboxBisar: action.payload,
        }),
        gremmyChecked: (state, action) => ({
            ...state,
            checkboxGremmy: action.payload,
        }),
        ottoChecked: (state, action) => ({
            ...state,
            checkboxOtto: action.payload,
        }),
        clearAllPartnersCheckboxes: (state) => ({
            checkboxEwl: '',
            checkboxPersonalService: '',
            checkboxFastService: '',
            checkboxBisar: '',
            checkboxGremmy: '',
            checkboxOtto: '',
        }),
    },
})

export const {
    ewlChecked,
    personalServiceChecked,
    fastServiceChecked,
    bisarChecked,
    gremmyChecked,
    ottoChecked,
    clearAllPartnersCheckboxes,
} = partnerCheckboxReducer.actions
export default partnerCheckboxReducer.reducer
