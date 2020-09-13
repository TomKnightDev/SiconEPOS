export default function GetItems(props) {
   return (
        fetch(
            props.uri,
        )
          .then((response) => response.json())
          .then((json) => {
            //setData(json);
            var items = [];
            for (var i = 0; i < json.length; i++) {
              items.push({text: json[i]['ItemCode']});
            }
            setData(items);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false))        
   )
}