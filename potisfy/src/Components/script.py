import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import pandas as pd
cid = 'YOUR CLIENT ID'
secret = 'YOUR CLIENT SECRET'
client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
sp = spotipy.Spotify(client_credentials_manager
=
client_credentials_manager)