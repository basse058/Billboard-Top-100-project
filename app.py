import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

import flask_cors
from flask_cors import CORS, cross_origin


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///billboard.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
bbaf = Base.classes.all_songs_final

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#################################################
# Flask Routes
#################################################

@app.route("/")
@cross_origin()

def index():
    return render_template('index.html')

def welcome():
    """It worked! List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/billboard_features"
    )


@app.route("/api/v1.0/billboard_features")
def data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(bbaf.song, bbaf.artist, bbaf.year, bbaf.peak_rank, bbaf.weeks_on_board, bbaf.track_id, bbaf.danceability, bbaf.energy, bbaf.key, bbaf.loudness, bbaf.mode, bbaf.speechiness, bbaf.instrumentalness, bbaf.liveness, bbaf.valence, bbaf.tempo, bbaf.duration_ms, bbaf.time_signature, bbaf.billboard, bbaf.decade).all()

    session.close()


    # Create a dictionary from the row data and append to a list of all_passengers
    all_features = []
    for song, artist, year, peak_rank, weeks_on_board, track_id, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration_ms, time_signature, billboard, decade in results:
        features_dict = {}

        features_dict["song"] = song
        features_dict["artist"] = artist
        features_dict["year"] = year
        features_dict["peak_rank"] = peak_rank
        features_dict["weeks_on_board"] = weeks_on_board
        features_dict["track_id"] = track_id
        features_dict["danceability"] = danceability
        features_dict["energy"] = energy
        features_dict["key"] = key
        features_dict["loudness"] = loudness
        features_dict["mode"] = mode
        features_dict["speechiness"] = speechiness
        features_dict["acousticness"] = acousticness
        features_dict["instrumentalness"] = instrumentalness
        features_dict["liveness"] = liveness
        features_dict["valence"] = valence
        features_dict["tempo"] = tempo
        features_dict["duration_ms"] = duration_ms
        features_dict["time_signature"] = time_signature
        features_dict["billboard"] = billboard
        features_dict["decade"] = decade

        all_features.append(features_dict)

    return jsonify(all_features)


if __name__ == '__main__':
    app.run()
