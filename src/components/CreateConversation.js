import React from 'react';

import TagArray from './TagArray'

///// MUI imports /////
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: theme.palette.primary.main
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
}));

const CreateConversation = ({ onMonolog, onCurrentSolution, currentTags, onCurrentTags, onCurrentTagsToSend, onCurrentMood }) => {

  ////// Own useStates and functions //////




  ////// MUI useStates and functions //////
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Your Issue</Typography>
          <Typography className={classes.secondaryHeading}>
            I'm listening.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg">
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                multiline
                rows="7"
                fullWidth
                id="monolog"
                label="Your Thoughts"
                name="monolog"
                autoFocus
                onChange={(e) => onMonolog(e)}
              />
            </form>
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Your Solution</Typography>
          <Typography className={classes.secondaryHeading}>
            Did you find a solution to your issue already?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg">
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                multiline
                rows="7"
                fullWidth
                id="solution"
                label="Your Solution"
                name="solution"
                autoFocus
                onChange={(e) => onCurrentSolution(e)}
              />
            </form>
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Tags</Typography>
          <Typography className={classes.secondaryHeading}>
            What topics do you associate with this issue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg">
            <TagArray onCurrentTags={onCurrentTags} currentTags={currentTags} onCurrentTagsToSend={onCurrentTagsToSend}/>
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Mood</Typography>
          <Typography className={classes.secondaryHeading}>
            How are you feeling?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container maxWidth="lg">
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                multiline
                rows="1"
                fullWidth
                id="mood"
                label="Your mood"
                name="mood"
                autoFocus
                onChange={(e) => onCurrentMood(e)}
              />
            </form>
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CreateConversation;