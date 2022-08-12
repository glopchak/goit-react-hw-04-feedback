import {Title} from "./Section.stuled"
import PropTypes from 'prop-types';

export const Section =({title, children }) => {
    return(
        <>
        <Title>{title}</Title>
        <div>{children}</div>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}