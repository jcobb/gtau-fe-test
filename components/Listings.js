import { useEffect, useState } from "react";

const ACTIONS = ["View", "Reply"];

const formatAsCurrency = (int) => {
    // TODO
    if (typeof int === 'string') return int
    let cost = int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return `$${cost}`
};

const SearchResult = ({ count = 0, keyword = '...', location = '...' }) => {
    return (
      <div className='listings__header'>
        <span className="title">Search Results</span>
        <span className="result">
          <a href="#">{count} results</a>
          &nbsp;for&nbsp;
          <a href="#">{keyword}</a>
          &nbsp;in&nbsp;
          <a href="#">{location}</a>
        </span>
      </div>
    )
  }

const Listing = (props) => {
    // TODO
    // This should be the component which renders an individual listing to the page
    const { description, imgUrl, location, price, title } = props || {}

    const onAction = (actionType) => console.log(`${actionType}: ${title}`)

    return (
        <div className="listing">
            <p className="title">{title}</p>
            <div className="subtitle">
                <span className="currency">{formatAsCurrency(price)}</span>
                <span className="location">{location}</span>
            </div>
            {imgUrl && <img src={imgUrl} />}
            <p className="description">{description}</p>
            <div className="actions">
                {ACTIONS.map((action, idx) =>
                    <button key={idx} onClick={() => onAction(action)}>{action}</button>
                )}
            </div>
        </div>
    );
};

const Listings = (props) => {
    // TODO
    // This component should make a request to the api endpoint (props.dataEndpoint)
    // then render the result as set of listings as per the design mocks
    // check props passed in from parent for other values that you may need to use
	const [listings, setListings] = useState([])

    const { dataEndpoint, keyword, location } = props || {}
	
	useEffect(() => {
        const callAPI = () => {
            const fetchData = async () => {
                const response = await fetch(dataEndpoint)
                if (response.status !== 200) {
                    throw Error('API Error.')
                }
                return response.json()
            }
            fetchData()
                .then(response => {
                    console.log('API Successful!')
                    console.log(`${response.length} results found.`)
                    setListings(response)
                })
                .catch(err => {
                    console.error(err)
                    console.error('Retrying in 5 seconds...')
                    setTimeout(callAPI, 5000)
                })
        }
        callAPI()
	}, [])

    return (
        <div>
            <SearchResult
                count={listings.length}
                keyword={keyword}
                location={location}
            />
            <div className='listings__grid'>
                {listings.length === 0 && <p>No results found.</p>} {/* Not doing much here but this can be changed to show if the api is still in process and if true, we can show loading state. */}
                {listings.map((props, idx) => <Listing key={idx} {...props} />)}
			</div>
        </div>
    );
};

export default Listings;
