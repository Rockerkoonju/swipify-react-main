/** @format */

import React from 'react';
import './MainPage.css';
import Card from '../../components/card/Card';
import useTracksFetch from '../../api/trackSearch';

function MainPage() {
	// const [tracks, setTracks] = useState([]);

	// const trackSearch = async () => {
	// 	const queryName = [
	// 		'a',
	// 		'b',
	// 		'c',
	// 		'd',
	// 		'e',
	// 		'f',
	// 		'g',
	// 		'h',
	// 		'i',
	// 		'j',
	// 		'k',
	// 		'l',
	// 		'm',
	// 		'n',
	// 		'o',
	// 		'p',
	// 		'q',
	// 		'r',
	// 		's',
	// 		't',
	// 		'u',
	// 		'v',
	// 		'w',
	// 		'x',
	// 		'y',
	// 		'z',
	// 	];
	// 	const randomQuery = Math.floor(Math.random() * queryName.length);
	// 	const trackIndex = Math.floor(Math.random() * 1000);

	// 	try {
	// 		const response = await axios.get('https://api.spotify.com/v1/search', {
	// 			headers: {
	// 				Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_ACCESS}`,
	// 			},import useTracksFetch from './../../api/trackSearch';

	// 			params: {
	// 				q: `${queryName[randomQuery]}`,
	// 				offset: trackIndex,
	// 				type: 'track',
	// 				limit: 1,
	// 			},
	// 		});

	// 		const resp = response.data.tracks.items;
	// 		const trackResponse = resp.map((track) => ({
	// 			name: track.name,
	// 			artists: track.artists.map((artist) => artist.name).join(', '),
	// 			trackId: track.id,
	// 			explicit: track.explicit,
	// 			popularity: track.popularity,
	// 			previewUrl: track.preview_url,
	// 			// imagesUrl: track.album.images.map(image => image.url),
	// 		}));

  //     return trackResponse;
	// 	} catch (error) {
	// 		console.error('Error fetching tracks:', error.message);
	// 		return [];
	// 	}
	// };

	// useEffect( () => {
  //   const fetchTracks = async () => {
  //     const tracks = await trackSearch();
  //     setTracks(tracks);
  //     console.log(tracks);
  //   }
	// 	fetchTracks();
	// }, []);

  const { data: tracks } = useTracksFetch();

	return (
		<div>

			<Card tracks={tracks}/>
      
		</div>
	);
}

export default MainPage;
