import React, { Component, Fragment } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import LaunchItem from './launchItem';
import MissionKeys from './MissionKeys'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKeys></MissionKeys>
                <Query
                    query={LAUNCHES_QUERY}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        console.log(data);

                        return <Fragment>
                            {
                                data.launches.map(launch =>
                                    <LaunchItem key={launch.flight_number} launch={launch} />
                                )
                            }
                        </Fragment>;
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default Launches
