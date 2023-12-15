import React from 'react';
class Luckysheet extends React.Component {

    componentDidMount() {


        const luckysheet = window.luckysheet;
        luckysheet.create({
            container: "luckysheet",
            allowUpdate: true,
            updateImageUrl: 'http://127.0.0.1:9004' + "/luckysheet/api/updateImg",
            updateUrl: "ws://" + '127.0.0.1:9004' + "/luckysheet/websocket/luckysheet",
            gridKey: "1079500#-8803#7c45f52b7d01486d88bc53cb17dcd2c3",
            loadUrl: 'http://127.0.0.1:9004' + "/luckysheet/api/load",
            loadSheetUrl: 'http://127.0.0.1:9004' + "/luckysheet/api/loadsheet"
        });

        console.log(luckysheet)
    }
    render() {
        const luckyCss = {
            margin: '0px',
            padding: '0px',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px'
        }
        return (
            <div
                id="luckysheet"
                style={luckyCss}
            ></div>
        )
    }
}

export default Luckysheet