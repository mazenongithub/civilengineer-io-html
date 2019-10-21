class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { render: '', menu: 'open', width: 0, height: 0 }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.setState({ render: 'home' })
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

    }
    closeMenuIcon() {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 56"><defs><style></style></defs><title>closeMenu</title><g id="Layer_2" data-name="Layer 2"><g id="PANEL"><rect className="closeMenuIcon-1" x="1" y="1" width="62" height="54" /><polygon points="45.44 38.61 42.61 41.44 32 30.83 21.39 41.44 18.57 38.61 29.17 28 18.57 17.39 21.39 14.56 32 25.17 42.61 14.56 45.44 17.39 34.83 28 45.44 38.61" /></g></g></svg>)
    }
    myapp(url, svgIcon, googlePlay, IOS, description) {
        return ({ url, svgIcon, googlePlay, IOS, description })
    }
    myapps() {
        let myapps = [];
        myapps.push(this.myapp("http://pm.civilengineer.io", "svgIcon", "googlePlay", "IOS", "Description"))
        myapps.push(this.myapp("http:/geotechnical.civilengineer.io", "svgIcon", "googlePlay", "IOS", "Description"))
        return myapps;
    }
    createapp(myapp) {
        return (
            <div className="content-container regularHeight general-font general-app-container">
                <div className="alignCenter">{myapp.url} </div>
                <div className="app-image-container showborder"> {myapp.svgIcon} </div>

                <div className="general-flex">
                    <div className="flex-one alignCenter">{myapp.googlePlay} </div>
                    <div className="flex-one alignCenter">{myapp.IOS} </div>
                </div>
                <div className="general-app-container"> {myapp.description} </div>

            </div>

        )
    }

    openmenularge() {
        const myapps = this.myapps();
        let appmenu = [];
        let appdisplay = [];
        myapps.map(myapp => {
            appmenu.push(<div className="general-app-container navigation-subcontainer showborder general-font regularHeight alignCenter"> {myapp.url} </div>)
            appdisplay.push(this.createapp(myapp))
        })

        return (
            <div className="general-container">
                <div className="large-container-1 showborder navigation-container">
                    <div className="general-flex">

                        <div className="flex-four showborder alignCenter general-font titleSize bold-font">Apps </div>
                        <div className="flex-one showborder alignRight"><button className="closeMenuIcon general-button">{this.closeMenuIcon()}</button> </div>

                    </div>
                    {appmenu}


                </div>


                <div className="large-container-2 showborder general-font">
                    <div className="content-container showborder alignCenter titleSize content-background bold-font">
                        Welcome to civilengineer.io
                </div>
                    <div className="general-app-container content-container regularHeight bold-font">
                        Delivering Free Open Source Applications to the internet, IOS, and Google Play Markets

                 </div>
                    {appdisplay}


                </div>
            </div>

        )
    }
    showcontent() {
        if (this.state.menu === "open") {

            if (this.state.width > 720) {
                return (this.openmenularge())
            } else {
                return (<div>menu open small</div>)
            }


        } else if (this.state.menu === "closed") {


            if (this.state.width > 1080) {
                return (<div>menu large</div>)
            } else if (this.state.width > 720) {
                return (<div>menu medium</div>)
            } else {
                return (<div>menu small</div>)
            }

        }

    }

    render() {
        console.log(this.state.width, this.state.height)
        return (this.showcontent())
    }
}