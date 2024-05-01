import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '2e1ec262bc4140ea919b81413c5c1137',
	},
})
