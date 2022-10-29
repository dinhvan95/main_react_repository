import React, { useEffect, useState } from "react";
import "../Style_Recipes_App.css";
import trash from "../../trash.svg";

export default function BodyAppContainer() {
  const [isDisplayNewRecipe, setIsDisplayNewRecipe] = useState(false);
  const [isDisableSave, setIsDisableSave] = useState(true);
  const [count, setCount] = useState([]);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  console.log(count);
  console.log("type", typeof count);
  const newRecipe = () => {
    setIsDisplayNewRecipe(true);
  };
  const indexSelected = -1;
  const deletedItem = (item) => {
    //xóa

    const remove = count.filter((el, position) => el?.id !== item?.id);
    setCount((pre) => (pre = remove));
  };

  useEffect(() => {
    let isFullIngredient = false;
    console.log("count.length", count.length, count);
    if (count.length > 0) {
      isFullIngredient = count.every((el) => el.name && el.amount > 0);
      console.log("isFullIngredient", isFullIngredient);
    }
    if (name && imageUrl && count.length > 0 && isFullIngredient) {
      setIsDisableSave((pre) => (pre = false));
    }
  }, [count.length, name, imageUrl]);
  console.log("name", name, "image", imageUrl);
  return (
    <div className="d-flex felx-row">
      <div className="btn-new-recipe p-3">
        <button className="btn btn-success m-3" onClick={(e) => newRecipe(e)}>
          New Recipe
        </button>
        <hr className="m-3"></hr>
      </div>
      <div
        className="w-50"
        style={{ display: isDisplayNewRecipe ? "block" : "none" }}
      >
        <div className="d-flex flex-row p-2">
          <button
            className={`btn btn-info m-2 ${isDisableSave ? "disabled" : ""}`}
          >
            Save
          </button>
          <button className="btn btn-danger m-2">Cancel</button>
        </div>
        <div className="d-flex form-container">
          <form className="form-container">
            <div class="form-group p-2">
              <label for="nameId">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameId"
                placeholder="Name"
                onChange={(e) => setName((pre) => (pre = e.target.value))}
              />
            </div>
            <div class="form-group p-2">
              <label for="imageURLId">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imageURLId"
                placeholder="Image URL"
                onChange={(e) => setImageUrl((pre) => (pre = e.target.value))}
              />
            </div>
            <div class="form-group p-2">
              <div className="form-control" id="imageId"></div>
            </div>
            <div class="form-group p-2">
              <label for="descriptionId">Description</label>
              <textarea
                class="form-control"
                id="descriptionId"
                rows="5"
                onChange={(e) =>
                  setDescription((pre) => (pre = e.target.value))
                }
              ></textarea>
            </div>

            {count.map((el, index) => {
              return (
                <div
                  key={index}
                  className="form-group p-2 d-flex flex-row"
                  id="ingredientContainer"
                >
                  <input
                    type="text"
                    className="form-control"
                    id="nameIngredentId"
                    onChange={(e) => {
                      const value = e.target.value;

                      const updateValue = count.map((el) => {
                        if (el.id === index) {
                          return {
                            ...el,
                            name: value,
                          };
                        }
                        return el;
                      });
                      setCount((pre) => (pre = updateValue));
                    }}
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="quantityIngredentId"
                    onChange={(e) => {
                      const value = e.target.value;
                      const updateValue = count.map((el) => {
                        if (el.id === index) {
                          return {
                            ...el,
                            amount: value,
                          };
                        }
                        return el;
                      });
                      setCount((pre) => (pre = updateValue));
                    }}
                  />
                  <button type="button" onClick={() => deletedItem(el)}>
                    <img src={trash} />
                  </button>
                </div>
              );
            })}

            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={() =>
                setCount((pre) => {
                  const newData = pre.concat({
                    name: "",
                    amount: 0,
                    id: pre.length,
                  });
                  return (pre = newData);
                })
              }
            >
              Add ingredient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
