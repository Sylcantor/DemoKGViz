# Data Visualization for Meteorological Data Exploration
This project aims to develop an interface for exploring and visualizing meteorological data described and semantically integrated into a graph using semantic web technologies. The interface highlights the spatiotemporal aspect of the RDF dataset and allows users to explore and understand climate indicators. Additional features such as detailed information on selected data and the ability to export data in RDF, JSON, or CSV formats improve the user experience and facilitate data reuse for various use cases.

## Introduction
Meteorological data is crucial for understanding and predicting weather phenomena and is widely used in various fields such as agriculture, biodiversity, and others. Despite the increasing availability of meteorological data on the web, it is often difficult for non-experts to understand and explore this data effectively. Semantic web technologies enable data to be structured and described in a way that makes it easier to understand.

In this project, we have developed an interface for exploring a RDF dataset of meteorological data provided by Météo-France. The dataset includes data from 60 meteorological stations scattered throughout metropolitan France and the French Overseas Territories, 20 different observable properties (measurements), and more than 10 million observations since 2016. The data has been semantically described, structured, and integrated using semantic web technologies such as the SOSA and SSN ontologies.

The specific objectives of the interface include:

Highlighting the spatiotemporal aspect of meteorological data through rich and intuitive graphical visualization
Allowing users to visualize and compare climate parameters collected over time in different geographic locations
Allowing users to visualize agro-climatic aggregates such as degree-days, cumulative precipitation, or number of freezing days, etc.
Allowing users to explore the dataset at different levels of spatial and temporal granularity.
State of the Art
There are many previous works related to the exploration of meteorological data, ranging from existing visualization methods to meteorological data available on the web. Commonly used visualization methods for exploring meteorological data include temperature maps, rainfall diagrams, wind graphs, etc. These methods allow visualizing meteorological data in an appropriate spatial and temporal context but often have limits in terms of granularity and the ability to integrate metadata.

There are also several websites and online services that provide open meteorological data, such as Météo-France, the National Oceanic and Atmospheric Administration (NOAA) of the United States, and others. These data can be used to develop applications for various usage domains such as agronomy.

The use of semantic web technologies allows the integration of meteorological data made available by different providers and thus responds to interoperability issues. However, querying linked data sets is still more complex for non-expert users.

## Methodology
An RDF dataset of meteorological observations was set up by the Wimmics team. This dataset covers the open meteorological data of Météo-France for the period 2016-2021 and includes data related to several measured atmospheric parameters (temperature, humidity, wind direction and strength, atmospheric pressure, precipitation height) or observed (sensible weather, cloud description, visibility). These data were semantically described, structured, and integrated using semantic web technologies such as the SOSA and SSN ontologies.

To structure and describe the data, existing ontologies such as SOSA and SSN were extended and reused. The user interface was developed using web technologies such as JavaScript, HTML, and CSS.

## Conclusion
This project has developed an innovative web solution for exploring meteorological data using semantic web technologies. The interface highlights the spatiotemporal aspect of meteorological data through a rich and intuitive visualization. It allows users to explore and compare climate parameters collected over time in different geographic locations and to visualize agro-climatic aggregates.

## Report
You can find a [detailed report](https://drive.google.com/file/d/1VTk_QDPzpSLpo6phFd5gInaGljIbkl-j/view?usp=sharing).
