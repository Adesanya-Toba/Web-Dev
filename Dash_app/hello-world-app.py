from dash import (
    Dash,
    html,
    dash_table,
    dcc,
    callback,
    Output,
    Input,
)  # "dcc (Dash Core Components) module includes a graph component to RENDER interactive graphs"
import pandas as pd
import plotly.express as px  # Used to BUILD the interactive graphs.

# Read CSV data into a pandas dataframe
df: pd.DataFrame = pd.read_csv(
    "https://raw.githubusercontent.com/plotly/datasets/master/gapminder2007.csv"
)

# Initialize the dash app
app = Dash()

# The app layout represents the app components that will be
# displayed on the web browser, shown here as a list.
app.layout = [
    html.Div(children="My First App with Data, Graph and Controls"),
    html.Hr(),
    dcc.RadioItems(
        options=["pop", "lifeExp", "gdpPercap"],
        value="lifeExp",  # default value when the page is rendered
        id="controls-and-radio-item",
    ),
    dash_table.DataTable(data=df.to_dict("records"), page_size=6),
    dcc.Graph(figure={}, id="controls-and-graph"),
]


# Add controls to build the interaction
@callback(
    Output(component_id="controls-and-graph", component_property="figure"),
    Input(component_id="controls-and-radio-item", component_property="value"),
)
def update_graph(col_chosen):
    fig = px.histogram(df, x="continent", y=col_chosen, histfunc="avg")
    return fig


# Run the app!
if __name__ == "__main__":
    app.run(debug=True)
