PGDMP         !                z           smart-board-db    14.4    14.4 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    smart-board-db    DATABASE     m   CREATE DATABASE "smart-board-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'German_Germany.1252';
     DROP DATABASE "smart-board-db";
                postgres    false            �            1259    16402 	   todo_list    TABLE     w   CREATE TABLE public.todo_list (
    id bigint NOT NULL,
    task character varying,
    "dueDate" character varying
);
    DROP TABLE public.todo_list;
       public         heap    postgres    false            �            1259    16395    userinformation    TABLE     �   CREATE TABLE public.userinformation (
    id bigint NOT NULL,
    name character varying,
    string character varying,
    "int" bigint,
    "boolean" boolean
);
 #   DROP TABLE public.userinformation;
       public         heap    postgres    false            �          0    16402 	   todo_list 
   TABLE DATA           8   COPY public.todo_list (id, task, "dueDate") FROM stdin;
    public          postgres    false    210   �	       �          0    16395    userinformation 
   TABLE DATA           M   COPY public.userinformation (id, name, string, "int", "boolean") FROM stdin;
    public          postgres    false    209   !
       b           2606    16410    todo_list todo_list_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.todo_list
    ADD CONSTRAINT todo_list_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.todo_list DROP CONSTRAINT todo_list_pkey;
       public            postgres    false    210            `           2606    16401 $   userinformation userinformation_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.userinformation
    ADD CONSTRAINT userinformation_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.userinformation DROP CONSTRAINT userinformation_pkey;
       public            postgres    false    209            �   '   x�3��H�)P�-����2�L�WH��/J-qc���� �,	'      �   �   x�5��
�0@���+�y�ⶴKݸ-�I:��1	1R��+R����BX&�&7̴��Q^�l,*RB��j^q�j!xu��߾1	�=�A��1ѱ��]�X��u��q���m�� \1�ew7ӂ��g`�} ��-
     