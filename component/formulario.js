import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, TextInput } from "react-native";
import moment from "moment";
import { Text, Button } from "react-native-elements";
import Input from "./input";
import AsyncStorage from '@react-native-async-storage/async-storage';


  const Formulario = () => {

     // USESTATES NECESARIOS
  const [precioHora, setPrecioHora] = useState("0");
  const [Errores, setErrores] = useState({
    PH: false, L1: false, L2: false, M1: false,
    M2: false, I1: false, I2: false, J1: false, J2: false, V1: false, V2: false, L3: false, L4: false,
    M3: false, M4: false, I3: false, I4: false, J3: false, J4: false, V3: false, V4: false, C1: false,
    C2: false, C3: false, C4: false, C5: false, C6: false, C7: false, C8: false, C9: false, C10: false
  });

  const [horaTrabajadas, setHoraTrabajadas] = useState({
    L1: "00:00", L2: "00:00", M1: "00:00", M2: "00:00", I1: "00:00", I2: "00:00",
    J1: "00:00", J2: "00:00", V1: "00:00", V2: "00:00", L3: "00:00", L4: "00:00",
    M3: "00:00", M4: "00:00", I3: "00:00", I4: "00:00", J3: "00:00", J4: "00:00",
    V3: "00:00", V4: "00:00",
  });
  useEffect(() => {
    AsyncStorage.getItem("precioHora")
    .then((value) => {if (value) {setPrecioHora (value)}})
    AsyncStorage.getItem("Errores")
    .then ((value) => {if (value) {setErrores (JSON.parse(value))}})
    AsyncStorage.getItem("horaTrabajadas")
    .then ((value) => {if (value) {setHoraTrabajadas (JSON.parse(value))}})
    // eslint-disable-next-line
      }, []);
  
     // MODIFICACIONES DEL PRECIO Y DE LAS HORAS
  const handlePrecioChange = (text) => {
    if (text === "") {
      setPrecioHora(0);
      setErrores({ ...Errores,  PH: false })
      } else {
    let valor = text.replace(/[^0-9]/g, '')
    setPrecioHora(valor)
    if (text >= 0) {
      setErrores({ ...Errores,  PH: false })
    } else {
      setErrores({ ...Errores,  PH: true })
    }
  }};
  
  const handleHoraChange = (name, text) => {
    if (text === "") {
      setHoraTrabajadas({ ...horaTrabajadas, [name]: "00:00"
       });
      setErrores({ ...Errores,  [name]: false})
       } else { 
    let valor = text.replace(/[^0-9]/g, '')
    .replace(/([0-9]{2})/, '$1:');
    setHoraTrabajadas({ ...horaTrabajadas, [name]: valor });
    let patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/
    patronHora.test(valor) ?
      setErrores({ ...Errores,  [name]: false }) :
      setErrores({ ...Errores,  [name]: true })}
  };

  // MANEJO DE BOTONES 
  const Lunesmanana = ()=> {
    let valor=horaTrabajadas.L1;
    let valor2=horaTrabajadas.L2;
    setHoraTrabajadas({ ...horaTrabajadas, M1:valor, I1:valor, J1: valor, V1: valor, M2:valor2, 
      I2:valor2, J2: valor2, V2: valor2})
  };
  const Lunestarde = ()=> {
    let valor=horaTrabajadas.L3;
    let valor2=horaTrabajadas.L4;
    setHoraTrabajadas({ ...horaTrabajadas, M3:valor, I3:valor, J3: valor, V3: valor, M4:valor2, 
      I4:valor2, J4: valor2, V4: valor2})
  };
  const Guardar = () => {
    AsyncStorage.clear()
    AsyncStorage.setItem('precioHora', precioHora);
    AsyncStorage.setItem('Errores', JSON.stringify(Errores));
    AsyncStorage.setItem('horaTrabajadas', JSON.stringify(horaTrabajadas));
  };
  const Reiniciar = () => {
    setHoraTrabajadas({
      L1: "00:00", L2: "00:00", M1: "00:00", M2: "00:00",
      I1: "00:00", I2: "00:00", J1: "00:00", J2: "00:00", V1: "00:00", V2: "00:00",
      L3: "00:00", L4: "00:00", M3: "00:00", M4: "00:00", I3: "00:00", I4: "00:00",
      J3: "00:00", J4: "00:00", V3: "00:00", V4: "00:00"
    });
    setPrecioHora("0");
    setErrores({PH: false, L1: false, L2: false, M1: false,
      M2: false, I1: false, I2: false, J1: false, J2: false, V1: false, V2: false, L3: false, L4: false,
      M3: false, M4: false, I3: false, I4: false, J3: false, J4: false, V3: false, V4: false, C1: false,
      C2: false, C3: false, C4: false, C5: false, C6: false, C7: false, C8: false, C9: false, C10: false});
    AsyncStorage.clear()
  };

  // MANEJO DE ERRORES 
  var comprobarErroresInput =  Errores.L1 || Errores.L2 || Errores.M1 ||
    Errores.M2 || Errores.I1 || Errores.I2 || Errores.J1 || Errores.J2 || Errores.V1 || Errores.V2 || Errores.L3 || Errores.L4 ||
    Errores.M3 || Errores.M4 || Errores.I3 || Errores.I4 || Errores.J3 || Errores.J4 || Errores.V3 || Errores.V4

  var comprobarErrores = Errores.PH || Errores.L1 || Errores.L2 || Errores.M1 ||
    Errores.M2 || Errores.I1 || Errores.I2 || Errores.J1 || Errores.J2 || Errores.V1 || Errores.V2 || Errores.L3 || Errores.L4 ||
    Errores.M3 || Errores.M4 || Errores.I3 || Errores.I4 || Errores.J3 || Errores.J4 || Errores.V3 || Errores.V4 || Errores.C1 ||
    Errores.C2 || Errores.C3 || Errores.C4 || Errores.C5 || Errores.C6 || Errores.C7 || Errores.C8 || Errores.C9 || Errores.C10

  useEffect(() => {
    if (!comprobarErroresInput) {
      var C1 = false, C2 = false, C3 = false, C4 = false, C5 = false, 
      C6 = false, C7 = false, C8 = false, C9 = false, C10 = false;
      if ((moment(horaTrabajadas.L2, "HH:mm")) < (moment(horaTrabajadas.L1, "HH:mm")) 
      && horaTrabajadas.L2 !== "00:00") {
        C1 = true;
      } if ((moment(horaTrabajadas.L4, "HH:mm")) < (moment(horaTrabajadas.L3, "HH:mm"))
      && horaTrabajadas.L4 !== "00:00") {
        C2 = true;
      } if ((moment(horaTrabajadas.M2, "HH:mm")) < (moment(horaTrabajadas.M1, "HH:mm"))
      && horaTrabajadas.M2 !== "00:00") {
        C3 = true;
      } if ((moment(horaTrabajadas.M4, "HH:mm")) < (moment(horaTrabajadas.M3, "HH:mm"))
      && horaTrabajadas.M4 !== "00:00") {
        C4 = true;
      } if ((moment(horaTrabajadas.I2, "HH:mm")) < (moment(horaTrabajadas.I1, "HH:mm"))
      && horaTrabajadas.I2 !== "00:00") {
        C5 = true;
      } if ((moment(horaTrabajadas.I4, "HH:mm")) < (moment(horaTrabajadas.I3, "HH:mm"))
      && horaTrabajadas.I4 !== "00:00") {
        C6 = true
      } if ((moment(horaTrabajadas.J2, "HH:mm")) < (moment(horaTrabajadas.J1, "HH:mm"))
      && horaTrabajadas.J2 !== "00:00") {
        C7 = true
      } if ((moment(horaTrabajadas.J4, "HH:mm")) < (moment(horaTrabajadas.J3, "HH:mm"))
      && horaTrabajadas.J4 !== "00:00") {
        C8 = true
      } if ((moment(horaTrabajadas.V2, "HH:mm")) < (moment(horaTrabajadas.V1, "HH:mm"))
      && horaTrabajadas.I2 !== "00:00") {
        C9 = true
      } if ((moment(horaTrabajadas.V4, "HH:mm")) < (moment(horaTrabajadas.V3, "HH:mm"))
      && horaTrabajadas.I4 !== "00:00") {
        C10 = true
      } if ((moment(horaTrabajadas.L3, "HH:mm")) < (moment(horaTrabajadas.L2, "HH:mm")) 
      && horaTrabajadas.L3 !== "00:00") {
        C1 = true; C2 = true;
      } if ((moment(horaTrabajadas.M3, "HH:mm")) < (moment(horaTrabajadas.M2, "HH:mm"))
      && horaTrabajadas.M3 !== "00:00") {
        C3 = true; C4= true;
      } if ((moment(horaTrabajadas.I3, "HH:mm")) < (moment(horaTrabajadas.I2, "HH:mm"))
      && horaTrabajadas.I3 !== "00:00") {
        C5 = true;  C6= true;
      } if ((moment(horaTrabajadas.J3, "HH:mm")) < (moment(horaTrabajadas.J2, "HH:mm"))
      && horaTrabajadas.J3 !== "00:00") {
        C7 = true;  C8= true;
      } if ((moment(horaTrabajadas.V3, "HH:mm")) < (moment(horaTrabajadas.V2, "HH:mm"))
      && horaTrabajadas.V3 !== "00:00") {
        C9 = true;  C10= true;
      }}
    setErrores({ ...Errores, C1: C1, C2: C2, C3: C3, C4: C4, C5: C5, C6: C6, C7: C7, C8: C8, C9: C9, C10: C10 })
  }
    // eslint-disable-next-line
    , [horaTrabajadas]);

    // CALCULO TOTAL 

    var CalculoTotal = (
      ((moment(horaTrabajadas.L2, "HH:mm")) - (moment(horaTrabajadas.L1, "HH:mm"))) +
      ((moment(horaTrabajadas.L4, "HH:mm")) - (moment(horaTrabajadas.L3, "HH:mm"))) +
      ((moment(horaTrabajadas.M2, "HH:mm")) - (moment(horaTrabajadas.M1, "HH:mm"))) +
      ((moment(horaTrabajadas.M4, "HH:mm")) - (moment(horaTrabajadas.M3, "HH:mm"))) +
      ((moment(horaTrabajadas.I2, "HH:mm")) - (moment(horaTrabajadas.I1, "HH:mm"))) +
      ((moment(horaTrabajadas.I4, "HH:mm")) - (moment(horaTrabajadas.I3, "HH:mm"))) +
      ((moment(horaTrabajadas.J2, "HH:mm")) - (moment(horaTrabajadas.J1, "HH:mm"))) +
      ((moment(horaTrabajadas.V2, "HH:mm")) - (moment(horaTrabajadas.V1, "HH:mm"))) +
      ((moment(horaTrabajadas.J4, "HH:mm")) - (moment(horaTrabajadas.J3, "HH:mm"))) +
      ((moment(horaTrabajadas.V4, "HH:mm")) - (moment(horaTrabajadas.V3, "HH:mm")))
        )
        /1000/60*precioHora/60;
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculo total de horas con precio</Text>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Precio de la hora</Text>
          <TextInput
            style={styles.input2}
            type="text"
            name="precioHora"
            value={precioHora === "0" ? "" : precioHora}
            onChangeText={text => handlePrecioChange(text)}
            placeholder="0"
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Lunes a la mañana </Text>
          <Input
            nombre="L1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L1}
            Errores={Errores.L1 || Errores.C1}
          />
        <Input
            nombre="L2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L2}
            Errores={Errores.L2 || Errores.C1}
          />
           
        </SafeAreaView>
        <SafeAreaView style={Errores.C1 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Lunes a la tarde</Text>
          <Input
            nombre="L3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L3}
            Errores={Errores.L3 || Errores.C2}
          />
          <Input
            nombre="L4"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L4}
            Errores={Errores.L4 || Errores.C2}
          />
        </SafeAreaView>
        <SafeAreaView style={Errores.C2 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Martes a la mañana </Text>
          <Input
            nombre="M1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M1}
            Errores={Errores.M1 || Errores.C3}
          />
          <Input
            nombre="M2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M2}
            Errores={Errores.M2 || Errores.C3}
          />
        </SafeAreaView>
        <SafeAreaView style={Errores.C3 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Martes a la tarde </Text>
          <Input
            nombre="M3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M3}
            Errores={Errores.M3 || Errores.C4}
          /><Input
          nombre="M4"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.M4}
          Errores={Errores.M4 || Errores.C4}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C4 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Miércoles a la mañana</Text>
          <Input
            nombre="I1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.I1}
            Errores={Errores.I1 || Errores.C5}
          /><Input
          nombre="I2"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.I2}
          Errores={Errores.I2 || Errores.C5}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C5 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Miércoles a la tarde </Text>
          <Input
            nombre="I3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.I3}
            Errores={Errores.I3 || Errores.C6}
          /><Input
          nombre="I4"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.I4}
          Errores={Errores.I4 || Errores.C6}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C6 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Jueves a la mañana </Text>
          <Input
            nombre="J1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.J1}
            Errores={Errores.J1 || Errores.C7}
          /><Input
          nombre="J2"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.J2}
          Errores={Errores.J2 || Errores.C7}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C7 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Jueves a la tarde</Text>
          <Input
            nombre="J3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.J3}
            Errores={Errores.J3 || Errores.C8}
          /><Input
          nombre="J4"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.J4}
          Errores={Errores.J4 || Errores.C8}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C8 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Viernes a la mañana </Text>
          <Input
            nombre="V1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.V1}
            Errores={Errores.V1 || Errores.C9}
          /><Input
          nombre="V2"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.V2}
          Errores={Errores.V2 || Errores.C9}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C9 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Viernes a la tarde </Text>
          <Input
            nombre="V3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.V3}
            Errores={Errores.V3 || Errores.C10}
          /><Input
          nombre="V4"
          handleHoraChange={handleHoraChange}
          horaTrabajadas={horaTrabajadas.V4}
          Errores={Errores.V4 || Errores.C10}
        />
        </SafeAreaView>
        <SafeAreaView style={Errores.C10 ? "" : styles.hidden}> 
          <Text style={styles.textdiaserror}>
        Por favor corrija este campo
         </Text></SafeAreaView>
        <Text style={styles.textdiaserror}>
        {comprobarErrores ? 
          "Por favor corrija los errores"
          : ""}
         </Text> 
        <Text style={styles.textdias}>
        El valor total a pagar es $ {comprobarErrores ? "" : CalculoTotal}
        </Text>
        

        <Button 
        containerStyle={{width: 350, marginHorizontal: 30, marginTop: 10}}
        title="Copiar valor lunes a la mañana al resto"
        onPress={()=> {Lunesmanana()}} 
        /> 
        <Button
        containerStyle={{width: 320, marginHorizontal: 50, marginVertical: 10}}
        title="Copiar valor lunes a la tarde al resto"
        onPress={()=> {Lunestarde()}} 
        /> 
        
        <View style={styles.buttton}>
        <Button 
        title="Guardar"
        onPress={()=> {Guardar()}}
        buttonStyle={{ backgroundColor: 'gray',}}
        /> 
        <Button 
        buttonStyle={{ backgroundColor: 'red',}}
        title="Reiniciar"
        onPress={()=> {Reiniciar()}} 

        /> 
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    alignItems: "center",
    fontSize: 45,
    justifyContent: "center",
    textAlign: "center",
    color: "blue",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
  },
  diasyhorarios: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  textdias: {
    fontSize: 20,
  },
  textdiaserror: {
    fontSize: 20,
    color: "red",
    textAlign: "right",
  },
  input2: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    minWidth: 170,
    maxWidth: 1000,
    fontSize: 20,
  },
  hidden: {
   hidden: false,
   height: 0
  },
  buttton: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 0,
    marginRight: 90,
    marginStart: 90

  },
});
    
  export default Formulario;