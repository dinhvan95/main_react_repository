import React, { useEffect, useState } from "react";
import "../Style_Recipes_App.css";
import trash from "../../trash.svg";

export default function BodyAppContainer() {
    const [isDisplayNewRecipe, setIsDisplayNewRecipe] = useState(false);
    const [count, setCount] = useState("");
    console.log(count);
    console.log("type", typeof count);
    const newRecipe = () => {
        setIsDisplayNewRecipe(true);
    }
    const indexSelected = -1
    const deletedItem = (index) => {
        setCount(Object.entries(count).filter(
            (el, i) => {
                if (index === i) {
                    console.log("rs", i);
                    i = indexSelected
                    return Object.entries(count).splice(i, 1);
                }
                return Object.entries(count);
            }
        ))
    }
    return (
        <div className="d-flex felx-row">
            <div className="btn-new-recipe p-3">
                <button className="btn btn-success m-3" onClick={(e) => newRecipe(e)}>New Recipe</button>
                <hr className="m-3"></hr>
            </div>
            <div className="w-50" style={{ display: isDisplayNewRecipe ? "block" : "none" }}>
                <div className="d-flex flex-row p-2">
                    <button className="btn btn-info m-2">Save</button>
                    <button className="btn btn-danger m-2">Cancel</button>
                </div>
                <div className="d-flex form-container">
                    <form className="form-container">
                        <div class="form-group p-2">
                            <label for="nameId">Name</label>
                            <input type="text" className="form-control" id="nameId" placeholder="Name" />
                        </div>
                        <div class="form-group p-2">
                            <label for="imageURLId">Image URL</label>
                            <input type="text" className="form-control" id="imageURLId" placeholder="Image URL" />
                        </div>
                        <div class="form-group p-2">
                            <div className="form-control" id="imageId"></div>
                        </div>
                        <div class="form-group p-2">
                            <label for="descriptionId">Description</label>
                            <textarea class="form-control" id="descriptionId" rows="5"></textarea>
                        </div>

                        {
                            Object.entries(count).map((el, index) => (
                                <div key={index} className="form-group p-2 d-flex flex-row" id="ingredientContainer"
                                >
                                    <input type="text" className="form-control" id="nameIngredentId" />
                                    <input type="number" className="form-control" id="quantityIngredentId" />
                                    <button type="button" onClick={() => deletedItem(index)}><img src={trash} /></button>
                                </div>
                            ))
                        }

                        <button type="button" className="btn btn-primary m-2" onClick={() => setCount((pre) => pre + 1)}>Add ingredient</button>
                    </form>
                </div>
            </div>
        </div>

    );
}