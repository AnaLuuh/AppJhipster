package testepacote.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Atividade.
 */
@Entity
@Table(name = "atividade")
public class Atividade implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "prazo")
    private String prazo;

    @ManyToOne
    private Professor professor;

    @ManyToOne
    private Disciplina disciplina;

    @OneToMany(mappedBy = "atividade")
    @JsonIgnore
    private Set<Entrega> entregas = new HashSet<>();

    @OneToMany(mappedBy = "atividade")
    @JsonIgnore
    private Set<Nota> notas = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrazo() {
        return prazo;
    }

    public Atividade prazo(String prazo) {
        this.prazo = prazo;
        return this;
    }

    public void setPrazo(String prazo) {
        this.prazo = prazo;
    }

    public Professor getProfessor() {
        return professor;
    }

    public Atividade professor(Professor professor) {
        this.professor = professor;
        return this;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public Disciplina getDisciplina() {
        return disciplina;
    }

    public Atividade disciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
        return this;
    }

    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }

    public Set<Entrega> getEntregas() {
        return entregas;
    }

    public Atividade entregas(Set<Entrega> entregas) {
        this.entregas = entregas;
        return this;
    }

    public Atividade addEntrega(Entrega entrega) {
        this.entregas.add(entrega);
        entrega.setAtividade(this);
        return this;
    }

    public Atividade removeEntrega(Entrega entrega) {
        this.entregas.remove(entrega);
        entrega.setAtividade(null);
        return this;
    }

    public void setEntregas(Set<Entrega> entregas) {
        this.entregas = entregas;
    }

    public Set<Nota> getNotas() {
        return notas;
    }

    public Atividade notas(Set<Nota> notas) {
        this.notas = notas;
        return this;
    }

    public Atividade addNota(Nota nota) {
        this.notas.add(nota);
        nota.setAtividade(this);
        return this;
    }

    public Atividade removeNota(Nota nota) {
        this.notas.remove(nota);
        nota.setAtividade(null);
        return this;
    }

    public void setNotas(Set<Nota> notas) {
        this.notas = notas;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Atividade atividade = (Atividade) o;
        if (atividade.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), atividade.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Atividade{" +
            "id=" + getId() +
            ", prazo='" + getPrazo() + "'" +
            "}";
    }
}
