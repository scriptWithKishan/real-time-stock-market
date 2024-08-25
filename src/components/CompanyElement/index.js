import { Component } from "react";
import { FaExternalLinkAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import './index.css';

class CompanyElement extends Component {
    state = {
        companyDetails: {},
        shareDetails: {}
    }

    componentDidMount() {
        this.getCompanyProfile();
        this.getShareDetails();
    }

    getCompanyProfile = async () => {
        const { ticker } = this.props;
        const token = "cr51iapr01qrns9m06lgcr51iapr01qrns9m06m0";
        const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${token}`;
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            companyDetails: data
        });
    }

    getShareDetails = async () => {
        const { ticker } = this.props;
        const token = "cr51iapr01qrns9m06lgcr51iapr01qrns9m06m0";
        const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${token}`;
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            shareDetails: data
        });
    }

    handleBuy = () => {
        const { companyDetails, shareDetails } = this.state;
        const { onBuy } = this.props;
        const stockDetails = {
            ...companyDetails,
            ...shareDetails
        };
        onBuy(stockDetails);
    }

    render() {
        const { companyDetails, shareDetails } = this.state;
        const { country, currency, exchange, logo, name, weburl } = companyDetails;
        const { c, d, dp } = shareDetails;

        return (
            <li className="company-element">
                <img className="company-img" src={logo} alt="company logo" />
                <div className="company-details">
                    <div className="name-web">
                        <h1 className="company-name">{name}</h1>
                        <a className="company-web" href={weburl}>
                            <FaExternalLinkAlt className="visit-logo" />
                            Visit Here
                        </a>
                    </div>
                    <div className="industry-exchange">
                        <p className="industry-exchange-text"><span className="company-span">Exchange:</span> {exchange}</p>
                        <p className="industry-exchange-text"><span className="company-span">Country:</span> {country}</p>
                    </div>
                    <div className="shares">
                        <h2 className="current-price">{c} <span className="currency">{currency}</span></h2>
                        <p className={d < 0 ? 'loss' : 'profit'}>
                            {d} ({dp}%) {d < 0 ? <FaArrowDown className="share-logo" /> : <FaArrowUp className="share-logo" />} today
                        </p>
                    </div>
                    <button onClick={this.handleBuy} className="buy-button">Buy</button>
                </div>
            </li>
        );
    }
}

export default CompanyElement;
