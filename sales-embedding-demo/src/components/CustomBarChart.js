import React from "react";
import ReactHighcharts from "react-highcharts";

const CustomBarChart = ({ error, isLoading, result }) => {
    if (isLoading) {
        return <span>Loading…</span>;
    }

    if (error) {
        return <span>Something went wrong :-(</span>;
    }

    if (result) {
        const config = {
            chart: {
                type: "column",
            },
            title: {
                text: "🎉🍾🙌 Custom Chart 🙌🍾🎉",
            },
            series: result
                .data()
                .slices()
                .toArray()
                .map(slice => ({ data: [parseFloat(slice.rawData()[0])] })),
        };

        return <ReactHighcharts config={config} />;
    }

    return <span>Init…</span>;
};

export default CustomBarChart;
