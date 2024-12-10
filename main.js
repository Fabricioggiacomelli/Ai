const database = [
    { code: 23870402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "1,5 mm²", packaging: "Bobina", color: "Preto", description: "23870402 AFUMEX GREEN 1,5mm² 1kV PT" },
    { code: 23870405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "1,5 mm²", packaging: "Bobina", color: "Verde", description: "23870405 AFUMEX GREEN 1,5mm² 1kV VD" },
    { code: 23870406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "1,5 mm²", packaging: "Bobina", color: "Azul", description: "23870406 AFUMEX GREEN 1,5mm² 1kV AZ" },
    { code: 23871402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "2,5 mm²", packaging: "Bobina", color: "Preto", description: "23871402 AFUMEX GREEN 2,5mm² 1kV PT" },
    { code: 23871405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "2,5 mm²", packaging: "Bobina", color: "Verde", description: "23871405 AFUMEX GREEN 2,5mm² 1kV VD" },
    { code: 23871406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "2,5 mm²", packaging: "Bobina", color: "Azul", description: "23871406 AFUMEX GREEN 2,5mm² 1kV AZ" },
    { code: 23872402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "4 mm²", packaging: "Bobina", color: "Preto", description: "23872402 AFUMEX GREEN 4mm² 1kV PT" },
    { code: 23872405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "4 mm²", packaging: "Bobina", color: "Verde", description: "23872405 AFUMEX GREEN 4mm² 1kV VD" },
    { code: 23872406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "4 mm²", packaging: "Bobina", color: "Azul", description: "23872406 AFUMEX GREEN 4mm² 1kV AZ" },
    { code: 23873402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "6 mm²", packaging: "Bobina", color: "Preto", description: "23873402 AFUMEX GREEN 6mm² 1kV PT" },
    { code: 23873405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "6 mm²", packaging: "Bobina", color: "Verde", description: "23873405 AFUMEX GREEN 6mm² 1kV VD" },
    { code: 23873406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "6 mm²", packaging: "Bobina", color: "Azul", description: "23873406 AFUMEX GREEN 6mm² 1kV AZ" },
    { code: 23874402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "10 mm²", packaging: "Bobina", color: "Preto", description: "23874402 AFUMEX GREEN 10mm² 1kV PT" },
    { code: 23874405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "10 mm²", packaging: "Bobina", color: "Verde", description: "23874405 AFUMEX GREEN 10mm² 1kV VD" },
    { code: 23874406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "10 mm²", packaging: "Bobina", color: "Azul", description: "23874406 AFUMEX GREEN 10mm² 1kV AZ" },
    { code: 23875402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "16 mm²", packaging: "Bobina", color: "Preto", description: "23875402 AFUMEX GREEN 16mm² 1kV PT" },
    { code: 23875405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "16 mm²", packaging: "Bobina", color: "Verde", description: "23875405 AFUMEX GREEN 16mm² 1kV VD" },
    { code: 23875406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "16 mm²", packaging: "Bobina", color: "Azul", description: "23875406 AFUMEX GREEN 16mm² 1kV AZ" },
    { code: 23876402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "25 mm²", packaging: "Bobina", color: "Preto", description: "23876402 AFUMEX GREEN 25mm² 1kV PT" },
    { code: 23876405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "25 mm²", packaging: "Bobina", color: "Verde", description: "23876405 AFUMEX GREEN 25mm² 1kV VD" },
    { code: 23876406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "25 mm²", packaging: "Bobina", color: "Azul", description: "23876406 AFUMEX GREEN 25mm² 1kV AZ" },
    { code: 23877402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "35 mm²", packaging: "Bobina", color: "Preto", description: "23877402 AFUMEX GREEN 35mm² 1kV PT" },
    { code: 23877405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "35 mm²", packaging: "Bobina", color: "Verde", description: "23877405 AFUMEX GREEN 35mm² 1kV VD" },
    { code: 23877406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "35 mm²", packaging: "Bobina", color: "Azul", description: "23877406 AFUMEX GREEN 35mm² 1kV AZ" },
    { code: 23878402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "50 mm²", packaging: "Bobina", color: "Preto", description: "23878402 AFUMEX GREEN 50mm² 1kV PT" },
    { code: 23878405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "50 mm²", packaging: "Bobina", color: "Verde", description: "23878405 AFUMEX FLEX GREEN 50mm² 1kV VD" },
    { code: 23878406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "50 mm²", packaging: "Bobina", color: "Azul", description: "23878406 AFUMEX FLEX GREEN 50mm² 1kV AZ" },
    { code: 23879402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "70 mm²", packaging: "Bobina", color: "Preto", description: "23879402 AFUMEX FLEX GREEN 70mm² 1kV PT" },
    { code: 23879405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "70 mm²", packaging: "Bobina", color: "Verde", description: "23879405 AFUMEX FLEX GREEN 70mm² 1kV VD" },
    { code: 23879406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "70 mm²", packaging: "Bobina", color: "Azul", description: "23879406 AFUMEX FLEX GREEN 70mm² 1kV AZ" },
    { code: 23880402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "95 mm²", packaging: "Bobina", color: "Preto", description: "23880402 AFUMEX FLEX GREEN 95mm² 1kV PT" },
    { code: 23880405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "95 mm²", packaging: "Bobina", color: "Verde", description: "23880405 AFUMEX FLEX GREEN 95mm² 1kV VD" },
    { code: 23880406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "95 mm²", packaging: "Bobina", color: "Azul", description: "23880406 AFUMEX FLEX GREEN 95mm² 1kV AZ" },
    { code: 23881402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "120 mm²", packaging: "Bobina", color: "Preto", description: "23881402 AFUMEX FLEX GREEN 120mm² 1kV PT" },
    { code: 23881405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "120 mm²", packaging: "Bobina", color: "Verde", description: "23881405 AFUMEX FLEX GREEN 120mm² 1kV VD" },
    { code: 23881406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "120 mm²", packaging: "Bobina", color: "Azul", description: "23881406 AFUMEX FLEX GREEN 120mm² 1kV AZ" },
    { code: 23882402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "150 mm²", packaging: "Bobina", color: "Preto", description: "23882402 AFUMEX FLEX GREEN 150mm² 1kV PT" },
    { code: 23882405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "150 mm²", packaging: "Bobina", color: "Verde", description: "23882405 AFUMEX FLEX GREEN 150mm² 1kV VD" },
    { code: 23882406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "150 mm²", packaging: "Bobina", color: "Azul", description: "23882406 AFUMEX FLEX GREEN 150mm² 1kV AZ" },
    { code: 23883402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "185 mm²", packaging: "Bobina", color: "Preto", description: "23883402 AFUMEX FLEX GREEN 185mm² 1kV PT" },
    { code: 23883405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "185 mm²", packaging: "Bobina", color: "Verde", description: "23883405 AFUMEX FLEX GREEN 185mm² 1kV VD" },
    { code: 23883406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "185 mm²", packaging: "Bobina", color: "Azul", description: "23883406 AFUMEX FLEX GREEN 185mm² 1kV AZ" },
    { code: 23884402, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "240 mm²", packaging: "Bobina", color: "Preto", description: "23884402 AFUMEX FLEX GREEN 240mm² 1kV PT" },
    { code: 23884405, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "240 mm²", packaging: "Bobina", color: "Verde", description: "23884405 AFUMEX FLEX GREEN 240mm² 1kV VD" },
    { code: 23884406, material: "1KV COBRE", product: "AFUMEX GREEN", voltage: "1kV", size: "240 mm²", packaging: "Bobina", color: "Azul", description: "23884406 AFUMEX FLEX GREEN 240mm² 1kV AZ" },
    { code: 26669800, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "2x1,5mm²", packaging: "Bobina", color: "Preto", description: "26669800 G7 SUPER EASY 2x1,5mm² 1kV PT" },
    { code: 26669801, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "2x2,5mm²", packaging: "Bobina", color: "Preto", description: "26669801 G7 SUPER EASY 2x2,5mm² 1kV PT" },
    { code: 26669802, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "2x4mm²", packaging: "Bobina", color: "Preto", description: "26669802 G7 SUPER EASY 2x4mm² 1kV PT" },
    { code: 26669803, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "2x6mm²", packaging: "Bobina", color: "Preto", description: "26669803 G7 SUPER EASY 2x6mm² 1kV PT" },
    { code: 26669804, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "2x10mm²", packaging: "Bobina", color: "Preto", description: "26669804 G7 SUPER EASY 2x10mm² 1kV PT" },
    { code: 26669805, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "2x16mm²", packaging: "Bobina", color: "Preto", description: "26669805 G7 SUPER EASY 2x16mm² 1kV PT" },
    { code: 26669806, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "3x2,5mm²", packaging: "Bobina", color: "Preto", description: "26669806 G7 SUPER EASY 3x2,5mm² 1kV PT" },
    { code: 26669807, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "3x4mm²", packaging: "Bobina", color: "Preto", description: "26669807 G7 SUPER EASY 3x4mm² 1kV PT" },
    { code: 26669808, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "3x6mm²", packaging: "Bobina", color: "Preto", description: "26669808 G7 SUPER EASY 3x6mm² 1kV PT" },
    { code: 26669809, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "3x10mm²", packaging: "Bobina", color: "Preto", description: "26669809 G7 SUPER EASY 3x10mm² 1kV PT" },
    { code: 26669810, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "3x16mm²", packaging: "Bobina", color: "Preto", description: "26669810 G7 SUPER EASY 3x16mm² 1kV PT" },
    { code: 26669811, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "4x2,5mm²", packaging: "Bobina", color: "Preto", description: "26669811 G7 SUPER EASY 4x2,5mm² 1kV PT" },
    { code: 26669812, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "4x4mm²", packaging: "Bobina", color: "Preto", description: "26669812 G7 SUPER EASY 4x4mm² 1kV PT" },
    { code: 26669813, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "4x6mm²", packaging: "Bobina", color: "Preto", description: "26669813 G7 SUPER EASY 4x6mm² 1kV PT" },
    { code: 26669814, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "4x10mm²", packaging: "Bobina", color: "Preto", description: "26669814 G7 SUPER EASY 4x10mm² 1kV PT" },
    { code: 26669815, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "4x16mm²", packaging: "Bobina", color: "Preto", description: "26669815 G7 SUPER EASY 4x16mm² 1kV PT" },
    { code: 26669816, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "5x2,5mm²", packaging: "Bobina", color: "Preto", description: "26669816 G7 SUPER EASY 5x2,5mm² 1kV PT" },
    { code: 26669817, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "5x4mm²", packaging: "Bobina", color: "Preto", description: "26669817 G7 SUPER EASY 5x4mm² 1kV PT" },
    { code: 26669818, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "5x6mm²", packaging: "Bobina", color: "Preto", description: "26669818 G7 SUPER EASY 5x6mm² 1kV PT" },
    { code: 26669819, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "5x10mm²", packaging: "Bobina", color: "Preto", description: "26669819 G7 SUPER EASY 5x10mm² 1kV PT" },
    { code: 26669820, material: "1KV COBRE", product: "G7 SUPER EASY", voltage: "1kV", size: "5x16mm²", packaging: "Bobina", color: "Preto", description: "26669820 G7 SUPER EASY 5x16mm² 1kV PT" }
  ];
  
  
  
    function toLowercase(str) {
      return str.toLowerCase();
    }
    
    function containsKeywords(entry, keywords) {
      const fields = [
        entry.material,
        entry.product,
        entry.voltage,
        entry.size,
        entry.packaging,
        entry.color
      ];
    
      const lowercasedFields = fields.map(field => toLowercase(field));
    
      return keywords.every(keyword => {
        return lowercasedFields.some(field => field.includes(toLowercase(keyword)));
      });
    }
    
    function handleSearch() {
      const input = document.getElementById("texto").value;
      const keywords = input.split(" ");
      const results = database.filter(entry => containsKeywords(entry, keywords));
    
      const respostaDiv = document.getElementById("resposta");
      if (results.length > 0) {
        respostaDiv.innerHTML = "<ul>" + results.map(entry => `<li>${entry.description}</li>`).join("") + "</ul>";
      } else {
        respostaDiv.innerHTML = "<p>Nenhum cabo encontrado com esses critérios.</p>";
      }
    }
    
    document.querySelector(".botao").addEventListener("click", handleSearch);
    