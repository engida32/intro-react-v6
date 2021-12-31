// import { useParams } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
    // constructor() {
    //     super();
    //     this.state = { loading: true };

    // }
    state = { loading: true, showModal: false };
    async componentDidMount() {
        const res = await fetch(
            // eslint-disable-next-line react/prop-types
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0]));

        // this.setState({
        //     loading: false,
        //     name: json.pets[0].name,
        //     breed: json.pets[0].breed,
        //     animal: json.pets[0].animal,
        //     city: json.pets[0].city,
        //     state: json.pets[0].state,
        //     description: json.pets[0].description,

        // })

    }
    toggleModal = () => this.setState({ showModal: !this.state.showModal });
    adopt = () => (window.location = "http://bit.ly/pet-adopt");
    render() {
        console.log(this.state);
        if (this.state.loading) {
            return <h2> loading</h2>;
        }
        const { animal, breed, city, state, description, name, images } = this.state;
        // throw new Error("its broken");
        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{animal}</h1>
                    {/* using template string of js*/}
                    <h2>{`${name}-${animal}-${breed}-${city},${state}`}</h2>
                    {/* using  jsc*/}
                    {/* <h2>{animal} - {breed} - {city},{state}</h2> */}

                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>

                    showModal ?(
                    <Modal>
                        <div>
                            <h1>would you like adopt  {name}</h1>
                            <div className="buttons">
                                <button onClick={this.adopt}>Yes</button>
                                <button onClick={this.toggleModal}>No</button>

                            </div>
                        </div>
                    </Modal>
                    ):null

                </div>

            </div>
        );


    }
}
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <DetailsWithRouter {...props} />
        </ErrorBoundary>
    );
}