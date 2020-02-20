import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'
import 'react-piano/dist/styles.css'

function App() {
  const firstNote = MidiNumbers.fromNote('c3')
  const lastNote = MidiNumbers.fromNote('f5')
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW
  })
  return (
    <div className="App">
      <header className="App-header">
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={midiNumber => {
            // Play a given note - see notes below
            console.log('------------------ '+midiNumber+' ------------------')
          }}
          stopNote={midiNumber => {
            // Stop playing a given note - see notes below
            console.log('------------------ stopped! ------------------')
          }}
          width={1440}
          keyboardShortcuts={keyboardShortcuts}
        />
        <br />
        Check out this nifty keyboard!
      </header>
    </div>
  )
}

export default App
