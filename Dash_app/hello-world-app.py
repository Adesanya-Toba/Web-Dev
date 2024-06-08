from dash import (
    Dash,
    html,
    dash_table,
    dcc,
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
    html.Div(children="My First App with Data"),
    dash_table.DataTable(data=df.to_dict("records"), page_size=10),
    dcc.Graph(figure=px.histogram(df, x="continent", y="lifeExp", histfunc="avg")),
]

# Run the app!
if __name__ == "__main__":
    app.run(debug=True)
