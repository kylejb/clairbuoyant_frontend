import React from 'react'
import { Button, Icon, Header, Image, Modal } from 'semantic-ui-react';
import JournalEntryForm from '../journal/JournalEntryForm';

const FormModal = (props) => {
    const [open, setOpen] = React.useState(false),
        [entry, setEntry] = React.useState({ buoy_id: "", beach: "", session_duration: "", entry: "", wave_quality: "", session_start_time: ""});

    //! Priority before styling
    const handleEntrySubmittion = () => {
        console.log("MODAL Fn:handleEntrySubmittion; entry (modal's state)... ", entry)
        if (props.entry) {
            props.submitHandler(entry);
        } else {
            props.submitHandler(entry, false);
        }        
    }

    React.useEffect(() => {
        if (props.entry) {
            setEntry(props.entry)
        }
        // eslint-disable-next-line
    }, [])


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={(props.entry && <Icon name='book'></Icon>) || <Button>New Entry</Button>}
    >
      <Modal.Header>Surf Journal</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Entry</Header>
          <p>
            Surfed nearby? Document your experience and find meaningful patterns to enable you to find the best waves.
          </p>
          {<JournalEntryForm modalEntry={entry} modalEntryHandler={setEntry} />}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Cancel" color='black' onClick={() => setOpen(false)}>
          
        </Button>
        <Button
        content="Save"
        labelPosition='right'
        icon='checkmark'
        onClick={() => {handleEntrySubmittion(); setOpen(false)} }
        positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default FormModal;