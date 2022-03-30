const useHandleSearch = (query) => {
	const search = query.target.value;
	if (query.length < 2) return null;

	axios.get("https://api.frontendeval.com/fake/food/" + query).then((res) => {
		return res.data;
	});
};
