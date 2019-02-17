import * as React from "react";
import {storage_url} from "../node_modules/urls";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {theme} from "./theme";
import {GitHub} from "react-feather";

export class AppComponent extends React.Component {

    state: any = {
        images: [
            {
                url: storage_url("angular.svg")
            }, {
                url: storage_url("react-logo.svg")
            }, {
                url: storage_url("vue-logo.svg")
            }
        ]
    }

    constructor(props) {
        super(props);
        $(".pre-loader").remove()
    }


    render(): React.ReactNode {
        const {images} = this.state;
        return <MuiThemeProvider theme={theme}>
            <Grid className="view-cover" container justify="center" alignItems="center">
                <Grid xs={12} md={8} item container className="w-100">
                    {
                        images.map(image =>
                            <Grid item xs={6} md className="p-4" key={image.url}>
                                <img className="w-100" src={image.url}/>
                            </Grid>
                        )
                    }
                </Grid>
                <Grid xs={12} sm={11} md={6} direction="column" alignItems="center">
                    <Typography variant="h3" className="title text-center">
                        Laravel
                    </Typography>

                    <h4 className="mb-3 text-center">
                        with the Power of React and Material UI
                    </h4>

                    <Grid container justify="center">
                        <Button target="_new" href="https://laravel.com/docs">
                            Laravel Documentation
                        </Button>
                        <Button target="_new" href="https://github.com/shridharkaushik29/laravel">
                            <GitHub size={15} className="mr-1"/>
                            GitHub
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    }
}
