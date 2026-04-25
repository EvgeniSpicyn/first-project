const ingredients = [
            "Краторная булка N-200i",
            "Говяжий метеорит (отбивная)",
            "Биокотлета из марсианской Магнолии",
            "Соус Spicy-X",
            "Мясо бессмертных моллюсков Protostomia",
            "Соус традиционный галактический",
            "Соус фирменный Space Sauce",
            "Плоды Фалленианского дерева",
            "Хрустящие минеральные кольца",
            "Соус с шипами Антарианского плоскоходца",
            "Кристаллы марсианских альфа-сахаридов",
            "Мини-салат Экзо-Плантаго",
            "Филе Люминесцентного тетраодонтимформа",
            "Сыр с астероидной плесенью",
            "Флюоресцентная булка R2-D3"
        ];
const fromIndex = 4;
        const toIndex = 8;

        const updated = ingredients
        
        .toSpliced(toIndex, 1, ingredients[fromIndex])
        
        .toSpliced(toIndex, 0, ingredients[toIndex])
        .toSpliced(fromIndex, 1);

        console.log(updated);
