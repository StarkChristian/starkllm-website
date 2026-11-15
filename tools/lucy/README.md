# Lucy assets

`public/assets/lucy/lucy.svg` is the animated standalone drawing. `public/assets/lucy/png/` holds the transparent poses
(idle, blink, wave, point, walk-a, walk-b, celebrate, talk). The favicon-size faces and the Open Graph image are made
from the SVG with a headless browser:

    pip install playwright pillow && playwright install chromium
    python3 tools/lucy/make_assets.py

The original artwork was supplied by the project owner; this vector drawing is our own redraw so that Lucy can move.
