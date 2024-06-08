from dash import Dash, html

# Initialize the dash app
app = Dash()

# The app layout represents the app components that will be
# displayed on the web browser, shown here as a list.
app.layout = [html.Div(children="Hello World")]

# Run the app!
if __name__ == "__main__":
    app.run(debug=True)
