package com.example.login.models;

import com.google.gson.annotations.SerializedName;

public class Cartes {
    @SerializedName("id_entreprise")
    private String entreprise;
    @SerializedName("solde")
    private String solde;

    public String getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(String entreprise) {
        this.entreprise = entreprise;
    }

    public String getSolde() {
        return solde;
    }

    public void setSolde(String solde) {
        this.solde = solde;
    }
}
