import Keyboard from 'react-simple-keyboard'
import { useState, useRef } from 'react'
import { Button } from 'react-bootstrap'

const SearchScreen = ({ HandleSearch }) => {
  const [input, setInput] = useState('')
  const [layout, setLayout] = useState('default')
  const keyboard = useRef()

  const onChange = (input) => {
    setInput(input)
    console.log('Input changed', input)
  }

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default'
    setLayout(newLayoutName)
  }

  const onKeyPress = (button) => {
    console.log('Button pressed', button)

    if (button === '{shift}' || button === '{lock}') handleShift()
  }

  const onChangeInput = (event) => {
    const input = event.target.value
    setInput(input)
    keyboard.current.setInput(input)
  }

  const searchHandler = () => {
    if (input === '') {
      alert('please type something')
    } else {
      alert(`searched ${input}`)
      HandleSearch(input)
    }
  }

  return (
    <div className='search'>
      <div className='upper'>
        <input
          value={input}
          placeholder={'Tap on the virtual keyboard to start'}
          onChange={onChangeInput}
        />
        <Button className='submit btn-md' onClick={() => searchHandler()}>
          Search
        </Button>
      </div>

      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

export default SearchScreen
