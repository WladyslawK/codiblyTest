import * as React from 'react'
import {useEffect} from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import {setFilterAC} from '../../app/appSlice'
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks'

export const FilterInput = () => {
  const filter = useAppSelector(state => state.appProducts.filter)
  const [id, setId] = React.useState<string>(filter ? filter.toString() : '')

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id !== '') {
      dispatch(setFilterAC({filter: +id}))
    } else {
      dispatch(setFilterAC({filter: null}))
    }
  }, [id])

  const handleIdChange = (id: number) => {
    if (id >= 1) {
      setId(id.toString())
    } else {
      setId('')
    }
  }

  return (
    <Box component="div">
      <TextField
        size={'small'}
        type="number"
        id="outlined-basic"
        label="filter Id"
        variant="outlined"
        onChange={e => handleIdChange(+e.currentTarget.value)}
        value={id}
      />
    </Box>
  )
}
