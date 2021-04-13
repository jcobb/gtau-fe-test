const ACTIONS = ["View", "Reply"];

const formatAsCurrency = (int) => {
    // TODO
};

const Listing = (props) => {
    // TODO
    // This should be the component which renders an individual listing to the page

    return <div className="listing"></div>;
};

const Listings = (props) => {
    // TODO
    // This component should make a request to the api endpoint (props.dataEndpoint)
    // then render the result as set of listings as per the design mocks
    // check props passed in from parent for other values that you may need to use

    return (
        <div>
            <div className="listings__header"></div>
            <div className="listings__grid"></div>
        </div>
    );
};

export default Listings;
