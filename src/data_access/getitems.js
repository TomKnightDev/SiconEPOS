export default function GetItems(props) {
   return (
        fetch(
          'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001'
            // props.uri,
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