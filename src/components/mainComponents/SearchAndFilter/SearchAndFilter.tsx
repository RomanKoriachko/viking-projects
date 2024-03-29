import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    Switch,
} from '@mui/material'
import React, { useState } from 'react'
import { clearAgeState, getAgeFromInput } from 'redux/ageSearchReducer'
import {
    franceChecked,
    clearAllCountrysCheckboxes,
    cyprusChecked,
    czechChecked,
    germanyChecked,
    greeceChecked,
    hollandChecked,
    lithuaniaChecked,
    polandChecked,
    romaniaChecked,
    slovakiaChecked,
    spainChecked,
    finlandChecked,
} from 'redux/countryCheckboxReducer'
import { addFilters, clearFilters } from 'redux/filterReducer'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { resetActualState, setIsActualState } from 'redux/isActualReducer'
import { changeFilterState } from 'redux/isFilterOpenReducer'
import { setIsMinor } from 'redux/isMinorReducer'
import {
    resetNationality,
    setNationalityCheckbox,
} from 'redux/nationalityCheckboxReducer'
import { cleanSearchInput, getSearchInput } from 'redux/searchContentReducer'
import {
    clearAllSexCheckboxes,
    setCouplesCheckbox,
    setFemaleCheckbox,
    setMaleCheckbox,
} from 'redux/sexCheckboxReducer'
import './SearchAndFilter.scss'
import {
    resetTypeOfSortingState,
    setTypeOfSortingState,
} from 'redux/typeOfSortingReducer'
import {
    bisarChecked,
    clearAllPartnersCheckboxes,
    ewlChecked,
    fastServiceChecked,
    gremmyChecked,
    ottoChecked,
    personalServiceChecked,
} from 'redux/partnerCheckboxReducer'
import AwsomeButtonComponent from '../AwsomeButtonComponent/AwsomeButtonComponent'

type Props = {}
type FilterClassStateType = {
    countryClass: string
    partnerClass: string
    sexClass: string
    nationalityClass: string
    actualityClass: string
    sortingClass: string
}

const SearchAndFilter = (props: Props) => {
    const dispatch = useAppDispatch()
    const countryCheckboxState = useAppSelector(
        (state) => state.countryCheckboxState
    )
    const partnersCheckboxState = useAppSelector(
        (state) => state.partnerCheckboxState
    )
    const sexCheckboxState = useAppSelector((state) => state.sexCheckboxState)
    const isMinorState = useAppSelector((state) => state.isMinorState)
    const isActualState = useAppSelector((state) => state.isActualState)
    const sortingState = useAppSelector((state) => state.sortingState)
    const ageSearchState = useAppSelector((state) => state.ageSearchState)
    const searchState = useAppSelector((state) => state.searchState)
    const filterState = useAppSelector((state) => state.filterState)
    const nationalityCheckboxState = useAppSelector(
        (state) => state.nationalityCheckboxState
    )

    const changeSeacrchContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getSearchInput(e.target.value))
    }

    // --------------------- Countries Filter ---------------------

    const polandCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(polandChecked('Польща'))
            : dispatch(polandChecked(''))
    }
    const czechCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(czechChecked('Чехія'))
            : dispatch(czechChecked(''))
    }
    const romaniaCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(romaniaChecked('Румунія'))
            : dispatch(romaniaChecked(''))
    }
    const slovakiaCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(slovakiaChecked('Словаччина'))
            : dispatch(slovakiaChecked(''))
    }
    const lithuaniaCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(lithuaniaChecked('Литва'))
            : dispatch(lithuaniaChecked(''))
    }
    const hollandCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(hollandChecked('Нідерланди'))
            : dispatch(hollandChecked(''))
    }
    const germanyCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(germanyChecked('Німеччина'))
            : dispatch(germanyChecked(''))
    }
    const greeceCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(greeceChecked('Греція'))
            : dispatch(greeceChecked(''))
    }
    const spainCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(spainChecked('Іспанія'))
            : dispatch(spainChecked(''))
    }
    const cyprusCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(cyprusChecked('Кіпр'))
            : dispatch(cyprusChecked(''))
    }
    const franceCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(franceChecked('Франція'))
            : dispatch(franceChecked(''))
    }
    const finlandCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(finlandChecked('Фінляндія'))
            : dispatch(finlandChecked(''))
    }

    // --------------------- Partners Filter ---------------------

    const ewlCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(ewlChecked('ewl'))
            : dispatch(ewlChecked(''))
    }
    const personalServiceCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(personalServiceChecked('personal service'))
            : dispatch(personalServiceChecked(''))
    }
    const fastServiceCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(fastServiceChecked('fast service'))
            : dispatch(fastServiceChecked(''))
    }
    const bisarCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(bisarChecked('bisar'))
            : dispatch(bisarChecked(''))
    }
    const gremmyCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(gremmyChecked('gremmy'))
            : dispatch(gremmyChecked(''))
    }
    const ottoCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(ottoChecked('otto'))
            : dispatch(ottoChecked(''))
    }

    // --------------------- Sex Filter ---------------------

    const maleCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(setMaleCheckbox('Чоловіки'))
            : dispatch(setMaleCheckbox(''))
    }
    const femaleCheckboxChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(setFemaleCheckbox('Жінки'))
            : dispatch(setFemaleCheckbox(''))
    }
    const couplesCheckboxChecking = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.target.checked
            ? dispatch(setCouplesCheckbox('Пари'))
            : dispatch(setCouplesCheckbox(''))
    }

    // --------------------- nationality filter ---------------------

    const nationalityFilterClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNationalityCheckbox({
                name: e.target.name,
                state: e.target.checked,
            })
        )
    }

    // --------------------- is actual filter ---------------------

    const onIsActualClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        return dispatch(setIsActualState(e.target.value))
    }

    // --------------------- sorting filter ---------------------

    const onTypeOfSortingClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        return dispatch(setTypeOfSortingState(e.target.value))
    }

    // --------------------- is minor filter ---------------------

    const isMinorChecking = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? dispatch(setIsMinor(true))
            : dispatch(setIsMinor(false))
    }

    // --------------------- Age to filter ---------------------

    const ageToValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getAgeFromInput(e.target.value))
    }

    // --------------------- Add filters ---------------------

    const onAddFilterClick = () => {
        dispatch(addFilters())
        dispatch(changeFilterState('close'))
    }

    // --------------------- Reser Filter ---------------------

    const resetFilter = () => {
        dispatch(clearAllCountrysCheckboxes())
        dispatch(clearAllSexCheckboxes())
        dispatch(clearAllPartnersCheckboxes())
        dispatch(setIsMinor(false))
        dispatch(clearAgeState())
        dispatch(clearFilters())
        dispatch(resetActualState())
        dispatch(resetNationality())
        dispatch(resetTypeOfSortingState())
    }

    // --------------------- Show filter categories ---------------------

    const [filterClassState, setFilterClassState] =
        useState<FilterClassStateType>({
            countryClass: 'filter-hide',
            partnerClass: 'filter-hide',
            sexClass: 'filter-hide',
            nationalityClass: 'filter-hide',
            actualityClass: 'filter-hide',
            sortingClass: 'filter-hide',
        })

    const onShowCountysFilterClick = () => {
        filterClassState.countryClass === 'filter-show'
            ? setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  countryClass: 'filter-hide',
              }))
            : setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  countryClass: 'filter-show',
              }))
    }
    const onShowPartnersFilterClick = () => {
        filterClassState.partnerClass === 'filter-show'
            ? setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  partnerClass: 'filter-hide',
              }))
            : setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  partnerClass: 'filter-show',
              }))
    }
    const onShowSexFilterClick = () => {
        filterClassState.sexClass === 'filter-show'
            ? setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  sexClass: 'filter-hide',
              }))
            : setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  sexClass: 'filter-show',
              }))
    }
    const onShowNationalityFilterClick = () => {
        filterClassState.nationalityClass === 'filter-show'
            ? setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  nationalityClass: 'filter-hide',
              }))
            : setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  nationalityClass: 'filter-show',
              }))
    }
    const onShowActualityFilterClick = () => {
        filterClassState.actualityClass === 'filter-show'
            ? setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  actualityClass: 'filter-hide',
              }))
            : setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  actualityClass: 'filter-show',
              }))
    }
    const onShowSortingFilterClick = () => {
        filterClassState.sortingClass === 'filter-show'
            ? setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  sortingClass: 'filter-hide',
              }))
            : setFilterClassState((prevState: FilterClassStateType) => ({
                  ...prevState,
                  sortingClass: 'filter-show',
              }))
    }

    return (
        <div className="search-and-filter">
            <div className="search">
                <div className="row search-and-btn">
                    <input
                        type="text"
                        placeholder="Пошук"
                        className="search-input"
                        onChange={changeSeacrchContent}
                        value={searchState}
                    />
                    <button
                        onClick={() => dispatch(cleanSearchInput())}
                    ></button>
                </div>
            </div>
            <div className="filter">
                <p className="filter-header">Фільтр</p>
                <div className="filter-country">
                    <div
                        className="row filter-category-header"
                        onClick={() => onShowCountysFilterClick()}
                    >
                        <div className="filter-section-header">Країна</div>
                        <div
                            className={`filter-arrow-btn ${filterClassState.countryClass}`}
                        ></div>
                    </div>
                    <div
                        className={`filter-content-wrapper ${filterClassState.countryClass}`}
                    >
                        <div className="filter-item">
                            <FormControlLabel
                                label="Польща"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="poland-checkbox"
                                        id="poland"
                                        name="poland"
                                        onChange={polandCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxPoland
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Чехія"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="czech-checkbox"
                                        id="czech"
                                        name="czech"
                                        onChange={czechCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxCzech
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Румунія"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="romania-checkbox"
                                        id="romania"
                                        name="romania"
                                        onChange={romaniaCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxRomania
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Словаччина"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="slovakia-checkbox"
                                        id="slovakia"
                                        name="slovakia"
                                        onChange={slovakiaCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxSlovakia
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Литва"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="lithuania-checkbox"
                                        id="lithuania"
                                        name="lithuania"
                                        onChange={lithuaniaCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxLithuania
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Нідерланди"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="holland-checkbox"
                                        id="holland"
                                        name="holland"
                                        onChange={hollandCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxHolland
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Німеччина"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="germany-checkbox"
                                        id="germany"
                                        name="germany"
                                        onChange={germanyCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxGermany
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Греція"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="greece-checkbox"
                                        id="greece"
                                        name="greece"
                                        onChange={greeceCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxGreece
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Іспанія"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="spain-checkbox"
                                        id="spain"
                                        name="spain"
                                        onChange={spainCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxSpain
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Кіпр"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="cyprus-checkbox"
                                        id="cyprus"
                                        name="cyprus"
                                        onChange={cyprusCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxCyprus
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Франція"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="france-checkbox"
                                        id="france"
                                        name="france"
                                        onChange={franceCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxFrance
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Фінляндія"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="finland-checkbox"
                                        id="finland"
                                        name="finland"
                                        onChange={finlandCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            countryCheckboxState.checkboxFinland
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-partner">
                    <div
                        className="row filter-category-header"
                        onClick={() => onShowPartnersFilterClick()}
                    >
                        <div className="filter-section-header">Партнер</div>
                        <div
                            className={`filter-arrow-btn ${filterClassState.partnerClass}`}
                        ></div>
                    </div>
                    <div
                        className={`filter-content-wrapper ${filterClassState.partnerClass}`}
                    >
                        <div className="filter-item">
                            <FormControlLabel
                                label="EWL"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="ewl-checkbox"
                                        id="ewl"
                                        name="ewl"
                                        onChange={ewlCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            partnersCheckboxState.checkboxEwl
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Personal Service"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="personal-service-checkbox"
                                        id="personal-service"
                                        name="personal-service"
                                        onChange={
                                            personalServiceCheckboxChecking
                                        }
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            partnersCheckboxState.checkboxPersonalService
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Fast Service"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="fast-service-checkbox"
                                        id="fast-service"
                                        name="fast-service"
                                        onChange={fastServiceCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            partnersCheckboxState.checkboxFastService
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Bisar"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="bisar-checkbox"
                                        id="bisar"
                                        name="bisar"
                                        onChange={bisarCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            partnersCheckboxState.checkboxBisar
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Gremmy"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="gremmy-checkbox"
                                        id="gremmy"
                                        name="gremmy"
                                        onChange={gremmyCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            partnersCheckboxState.checkboxGremmy
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Otto"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        className="otto-checkbox"
                                        id="otto"
                                        name="otto"
                                        onChange={ottoCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            partnersCheckboxState.checkboxOtto
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-sex">
                    <div
                        className="row filter-category-header"
                        onClick={() => onShowSexFilterClick()}
                    >
                        <div className="filter-section-header">Стать</div>
                        <div
                            className={`filter-arrow-btn ${filterClassState.sexClass}`}
                        ></div>
                    </div>
                    <div
                        className={`filter-content-wrapper ${filterClassState.sexClass}`}
                    >
                        <div className="filter-item">
                            <FormControlLabel
                                label="Чоловіки"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="male"
                                        name="male"
                                        onChange={maleCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            sexCheckboxState.male ? true : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Жінки"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="feemale"
                                        name="feemale"
                                        onChange={femaleCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            sexCheckboxState.female
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Пари"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="couples"
                                        name="couples"
                                        onChange={couplesCheckboxChecking}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            sexCheckboxState.couples
                                                ? true
                                                : false
                                        }
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-nationality">
                    <div
                        className="row filter-category-header"
                        onClick={() => onShowNationalityFilterClick()}
                    >
                        <div className="filter-section-header">
                            Національність
                        </div>
                        <div
                            className={`filter-arrow-btn ${filterClassState.nationalityClass}`}
                        ></div>
                    </div>
                    <div
                        className={`filter-content-wrapper ${filterClassState.nationalityClass}`}
                    >
                        <div className="filter-item">
                            <FormControlLabel
                                label="Україна"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="ukraine-nationality"
                                        name="ukraine"
                                        onChange={nationalityFilterClick}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            nationalityCheckboxState.ukraine
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Молдова"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="moldova-nationality"
                                        name="moldova"
                                        onChange={nationalityFilterClick}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            nationalityCheckboxState.moldova
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Грузія"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="georgia-nationality"
                                        name="georgia"
                                        onChange={nationalityFilterClick}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            nationalityCheckboxState.georgia
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Вірменія"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="virmenia-nationality"
                                        name="virmenia"
                                        onChange={nationalityFilterClick}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            nationalityCheckboxState.virmenia
                                        }
                                    />
                                }
                            />
                        </div>
                        <div className="filter-item">
                            <FormControlLabel
                                label="Білорусь"
                                className="filter-checkbox"
                                control={
                                    <Checkbox
                                        id="bilorus-nationality"
                                        name="bilorus"
                                        onChange={nationalityFilterClick}
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 20,
                                            },
                                        }}
                                        checked={
                                            nationalityCheckboxState.bilorus
                                        }
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-is-actual">
                    <FormControl className="filter-radio-wrapper">
                        <div
                            className="row filter-category-header"
                            onClick={() => onShowActualityFilterClick()}
                        >
                            <div className="filter-section-header">
                                Актуальність
                            </div>
                            <div
                                className={`filter-arrow-btn ${filterClassState.actualityClass}`}
                            ></div>
                        </div>
                        <RadioGroup
                            className={`filter-content-wrapper ${filterClassState.actualityClass}`}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="actual"
                            name="radio-buttons-group"
                            value={isActualState}
                            onChange={onIsActualClick}
                        >
                            <FormControlLabel
                                value="actual"
                                control={<Radio />}
                                label="Актуальні"
                            />
                            <FormControlLabel
                                value="notActual"
                                control={<Radio />}
                                label="Не актуальні"
                            />
                            <FormControlLabel
                                value="both"
                                control={<Radio />}
                                label="Всі"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="filter-sorting">
                    <FormControl className="filter-radio-wrapper">
                        <div
                            className="row filter-category-header"
                            onClick={() => onShowSortingFilterClick()}
                        >
                            <div className="filter-section-header">
                                Сортування
                            </div>
                            <div
                                className={`filter-arrow-btn ${filterClassState.sortingClass}`}
                            ></div>
                        </div>
                        <RadioGroup
                            className={`filter-content-wrapper ${filterClassState.sortingClass}`}
                            aria-labelledby="filter-by-group-label"
                            defaultValue="name"
                            name="radio-buttons-group"
                            value={sortingState}
                            onChange={onTypeOfSortingClick}
                        >
                            <FormControlLabel
                                value="name"
                                control={<Radio />}
                                label="Сортувати по назві"
                            />
                            <FormControlLabel
                                value="date"
                                control={<Radio />}
                                label="Сортувати по даті"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="filter-adult">
                    <div className="filter-wrapper">
                        <div className="filter-item">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            onChange={isMinorChecking}
                                            checked={
                                                isMinorState ? true : false
                                            }
                                        />
                                    }
                                    label="Для неповнолітніх"
                                />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="filter-age">
                    <div className="filter-wrapper">
                        <div>
                            <input
                                type="text"
                                name="age18"
                                maxLength={2}
                                onChange={ageToValue}
                                value={ageSearchState ? ageSearchState : ''}
                            />
                            <label htmlFor="age18">Вік кандидата</label>
                        </div>
                    </div>
                </div>
                <div className="filter-buttons">
                    <div
                        className={`add-filters-btn-wrapper ${
                            filterState ? 'filter-added' : ''
                        }`}
                        onClick={() => onAddFilterClick()}
                    >
                        <AwsomeButtonComponent btnName="Застосувати фільтр" />
                    </div>
                    <div
                        className="add-filters-btn-wrapper"
                        onClick={() => resetFilter()}
                    >
                        <AwsomeButtonComponent btnName="Скинути фільтр" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilter
