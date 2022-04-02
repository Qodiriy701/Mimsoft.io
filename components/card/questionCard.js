import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import { useTranslation } from 'react-i18next';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    background: 'transparent',
    color: 'white',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', color: 'white', flexShrink: '0' }} />}{...props} />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'transparent'
            : 'transparent',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: 'white',
    },
    '& .MuiAccordionSummary-content': {
        fontWeight: '600',
    },
    '& .MuiAccordionSummary': {
        backgroundColor: 'transparent',
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '5px 0',
    marginTop: '10px',
    color: '#999999',
    lineHeight: '24px',

}));



function CustomizedAccordions({ data }) {
    // const { i18n } = useTranslation()
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {data.map((question, index) => {
                index++;
                return (
                    <Accordion key={question.id} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                        <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`} sx={{ padding: '0px' }}>
                            <Typography sx={{ fontSize: '1.28rem', fontWeight: '600', color: 'white', fontFamily: 'Poppins', marginRight: '10px' }} >{question.title.uz}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: '1rem', fontFamily: 'Poppins', }} dangerouslySetInnerHTML={{ __html: question.body.uz }}></Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}

        </>
    );
}

export default CustomizedAccordions;