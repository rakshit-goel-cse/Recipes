import { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  BackHandler,
  Modal,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

function ShowDataHeads(params) {
  const [course, diet, cuisines, text, setPageRender] = params.data;
  const [data, setdata] = useState([]);
  const [serverStatus, setServerStatus] = useState("Wait");
  const [modalVisible, setModalVisible] = useState(false);
  const [openItem, setOpenItem] = useState([]);

  const [tranName, settranName] = useState(false);
  const [transIng, setTransIng] = useState(false);
  const [transInst, setTransInst] = useState(false);

  useEffect(() => {
    const returnFunct = () => {
      if (modalVisible) {
        setModalVisible(false);
        setOpenItem([]);
        return true;
      }
      setPageRender("search");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      returnFunct
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    const getDataFromServer = () => {
      console.log("serching data");
      let url = "http://192.168.29.231:1234/recipes";

      //setSearchData("Searching");

      fetch(url, {
        headers: {
          Accept: "application/json",
        },
        parameters: {
          Course: course,
          Diet: diet,
          Cuisine: cuisines,
          SearchText: text,
        },
      })
        .then((response) => {
          if (!response.ok) {
            //setSearchData("Error searching");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setServerStatus("OK");
          setdata(data);
        })
        .catch((error) => {
          setServerStatus("error");
          setdata([]);
          console.error(error);
        });
    };
    if(data){
    getDataFromServer();
    }
    return () => {
      setdata([]);
    };
  }, []);

  const getColor = () => {
    let indexx = Math.floor(Math.random() * 19);
    return colorCodes[indexx];
  };

  
  const modelComp = () => {

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setOpenItem([]);
        }}
      >

        <Text
            style={{
              fontSize: 22,
              position: "absolute",
              left: 20,
              top: 5,
              fontWeight: "900",
            }}
            onPress={() => {
              console.log("modal back button");
              setModalVisible(false);
              setOpenItem([]);
            }}
          >
            {"<<"}
          </Text>

        <View
          style={{
            height: "95%",
            width: "90%",
            backgroundColor: "lightgreen",
            alignItems: "center",
            marginHorizontal: "5%",
            marginVertical: "5%",
            borderRadius: 90,
            padding: 20,
            justifyContent: "space-evenly",
          }}
        >
          {/********************************************************** */}

          
  <Text style={styles.heading}>
        <Text style={styles.recipeName}>
          { openItem.openItemName ?
          tranName ? openItem.translatedRecipeName : openItem.openItemName
        : openItem.translatedRecipeName
        }
        </Text>
        {openItem.translatedRecipeName && openItem.openItemName && 
        openItem.translatedRecipeName !== openItem.openItemName &&
          <TouchableOpacity onPress={() => settranName(!tranName)}>
            <Text style={styles.button}>#</Text>
          </TouchableOpacity>
        }
        
      </Text>
 

          <Text style={styles.link}>
            URL:{" "}
            <Text
              style={styles.url}
              onPress={() => Linking.openURL(openItem.url)}
            >
              {openItem.url}
            </Text>
          </Text>
          <Text>
            <Text style={styles.bold}>Cuisine:</Text> {openItem.cuisine}
          </Text>
          <Text>
            <Text style={styles.bold}>Course:</Text> {openItem.course}
          </Text>
          <Text>
            <Text style={styles.bold}>Prep Time:</Text>{" "}
            {openItem.prepTimeInMins} mins
          </Text>
          <Text>
            <Text style={styles.bold}>Cook Time:</Text>{" "}
            {openItem.cookTimeInMins} mins
          </Text>
          <Text>
            <Text style={styles.bold}>Total Time:</Text>{" "}
            {openItem.totalTimeInMins} mins
          </Text>
          <Text>
            <Text style={styles.bold}>Servings:</Text> {openItem.servings}
          </Text>
          <Text>
            <Text style={styles.bold}>Diet:</Text> {openItem.diet}
          </Text>

          
          <View style={{ height: "30%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>    
          <Text>
        <Text style={styles.bold}>{transIng && "Translated"} Ingredients:</Text> 
        {transIng ? openItem.translatedIngredients : openItem.ingredients}
        <TouchableOpacity onPress={() => setTransIng(!transIng)} style={styles.button}>
          <Text style={styles.buttonText}>#</Text>
        </TouchableOpacity>
      </Text>
      </ScrollView>
          </View>


      <View style={{ height: "30%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
      <Text>
        <Text style={styles.bold}>{transInst && "Translated"} Instructions:</Text> 
        {transInst ? openItem.translatedInstructions : openItem.instructions}
        <TouchableOpacity onPress={() => setTransInst(!transInst)} style={styles.button}>
          <Text style={styles.buttonText}>#</Text>
        </TouchableOpacity>
      </Text>
      </ScrollView>
          </View>
          
            
          {/*********************************************************** */}
        </View>
      </Modal>
    );
  };

  return (
    <>
      {serverStatus === "Wait" && (
        <ActivityIndicator size="large" color="#3498db" />
      )}

      {serverStatus === "OK" && (
        <View
          style={{
            flexGrow: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "blue",
          }}
        >
          {openItem !== [] && modalVisible && modelComp()}

          <Text
            style={{
              fontSize: 22,
              position: "absolute",
              left: 20,
              top: 5,
              fontWeight: "900",
            }}
            onPress={() => setPageRender("search")}
          >
            {"<<"}
          </Text>
          <ScrollView
            style={{ height: "70%", padding: 10 }}
            showsVerticalScrollIndicator={false}
          >
            {data.slice(0, 20).map((item, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    borderColor: "black",
                    borderWidth: 2,
                    borderRadius: 170,
                    width: 250,
                    height: 250,
                    marginBottom: 30,
                    textAlign: "center",
                    textAlignVertical: "center",
                    backgroundColor: getColor(),
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    flexWrap: "wrap",
                  }}
                  onPress={() => {
                    console.log(index);
                    setModalVisible(true);
                    setOpenItem(item);
                  }}
                >
                  {item["recipeName"]}
                </Text>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
}

export default ShowDataHeads;

//20 color codes
const colorCodes = [
  "#FFD700", // Gold
  "#FFA07A", // Light Salmon
  "#00CED1", // Dark Turquoise
  "#FF69B4", // Hot Pink
  "#7FFFD4", // Aquamarine
  "#FF6347", // Tomato
  "#00FFFF", // Cyan
  "#4d2600", // Dark brown
  "#87CEEB", // Sky Blue
  "#FF4500", // Orange Red
  "#32CD32", // Lime Green
  "#6495ED", // Cornflower Blue
  "#FF8C00", // Dark Orange
  "#8A2BE2", // Blue Violet
  "#FFDAB9", // Peach Puff
  "#00FF7F", // Spring Green
  "#FF1493", // Deep Pink
  "#4682B4", // Steel Blue
  "#FFB6C1", // Light Pink
];

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recipeName: {
    fontWeight: "normal",
  },
  button: {
    width: 20,
    backgroundColor: "black",
    color: "white",
  },
  link: {
    marginTop: 10,
  },
  url: {
    color: "blue",
  },
  bold: {
    fontWeight: "bold",
  },
});
