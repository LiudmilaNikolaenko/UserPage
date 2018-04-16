import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './footer.css';

class Footer extends React.Component {
    static propTypes = {
        phone: PropTypes.string,
        email: PropTypes.string,
        skype: PropTypes.string
    };

    render() {
        const {phone, email, skype} = this.props;
        return (
            <div className="footer">
                <div className="footer__info">
                    <p>Mobile: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Skype: {skype}</p>
                </div>
                <Link to="/" className="footer__link">{'</>'}</Link>
            </div>
        )
    };

};

export default connect((state) => ({
    phone: state.user.phone,
    email: state.user.email,
    skype: state.user.skype
}))(Footer);